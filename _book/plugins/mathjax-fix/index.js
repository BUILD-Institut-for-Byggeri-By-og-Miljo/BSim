const placeholderStore = new Map();

function blockPlaceholder(index) {
    return `@@MATHJAX-BLOCK-${index}@@`;
}

function inlinePlaceholder(index) {
    return `@@MATHJAX-INLINE-${index}@@`;
}

module.exports = {
    hooks: {
        'page:before': function(page) {
            const store = { blocks: [], inlines: [] };
            let content = page.content;

            content = content.replace(/\$\$([\s\S]+?)\$\$/g, function(match, formula) {
                const index = store.blocks.push(formula) - 1;
                return blockPlaceholder(index);
            });

            content = content.replace(/\\\((.+?)\\\)/g, function(match, formula) {
                const index = store.inlines.push(formula) - 1;
                return inlinePlaceholder(index);
            });

            content = content.replace(/\$(.+?)\$/g, function(match, formula) {
                const index = store.inlines.push(formula) - 1;
                return inlinePlaceholder(index);
            });

            placeholderStore.set(page.path, store);
            page.content = content;
            return page;
        },

        page: function(page) {
            const store = placeholderStore.get(page.path);
            if (!store) {
                return page;
            }

            let html = page.content;

            html = html.replace(/@@MATHJAX-BLOCK-(\d+)@@/g, function(match, index) {
                const formula = store.blocks[Number(index)];
                if (formula == null) {
                    return match;
                }
                const trimmed = formula.trim();
                return `<span class=\"mathjax-block\">\\[\n${trimmed}\n\\]</span>`;
            });

            html = html.replace(/@@MATHJAX-INLINE-(\d+)@@/g, function(match, index) {
                const formula = store.inlines[Number(index)];
                if (formula == null) {
                    return match;
                }
                return `\\(${formula}\\)`;
            });

            placeholderStore.delete(page.path);
            page.content = html;
            return page;
        }
    }
};
