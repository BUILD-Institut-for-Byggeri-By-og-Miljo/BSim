# Remove HonKit Footer Plugin

A local HonKit plugin that permanently removes the  
“Published with HonKit” footer link — including after in-page navigation.

## Features
- Removes the footer link on initial page load.
- Removes it again after sidebar or next/prev link navigation.
- No CSS hacks — works by manipulating the DOM.

---

## Installation (Local Development)

1. **Create the plugin folder**

From your HonKit project root (same level as `book.json`):

```bash
mkdir -p plugins/remove-honkit-footer
```

Place your plugin code inside `plugins/remove-honkit-footer/`  
(required: `index.js` and `package.json`).

---

2. **Initialize `package.json` if missing**

If your project doesn’t have a `package.json` yet:

```bash
npm init -y
```

---

3. **Install the local plugin**

Run:

```bash
npm i -D "gitbook-plugin-remove-honkit-footer@file:./plugins/remove-honkit-footer"
```

---

4. **Enable the plugin in `book.json`**

Add the plugin short name (no path):

```json
{
  "plugins": ["remove-honkit-footer"]
}
```

---

5. **Install all HonKit plugins**

```bash
npx honkit install
```

---

6. **Serve or build your HonKit site**

Serve locally:

```bash
npx honkit serve
```

Build for production:

```bash
npx honkit build
```

---

## Directory Structure Example

```
my-honkit-project/
├── book.json
├── package.json
├── plugins/
│   └── remove-honkit-footer/
│       ├── index.js
│       └── package.json
└── README.md
```

---

## Troubleshooting

**Error: Plugin not found**  
- Confirm the folder is exactly `plugins/remove-honkit-footer` (same level as `book.json`).  
- Use the exact install command:  
  ```bash
  npm i -D "gitbook-plugin-remove-honkit-footer@file:./plugins/remove-honkit-footer"
  ```  
- Use `"plugins": ["remove-honkit-footer"]` in `book.json` — not a file path.  
- Run `npx honkit install` after editing `book.json`.

**Footer reappears after navigation**  
- The plugin must include a `page.change` hook to re-remove the footer link after in-page loads.  
- Update to the latest local plugin version if you edited it.
