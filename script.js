const translations = {
    categories: {
      "Moduler": "Modules",
      "Diverse": "Miscellaneous",
      "Installation": "Installation",
      "Introduktion": "Introduction",
      "BSim : Programstruktur": "BSim: Program Structure",
      "SimDB: Database": "SimDB: Database",
      "Cad-tegninger som grundlag for geometri": "CAD Drawings as Geometry Base",
      "SimView": "SimView",
      "Termiske zoner": "Thermal Zones",
      "Systemer": "Systems",
      "more_horiz": "More...",
      "Kappamodellen": "Kappa Model",
      "Tsbi5: Termisk Simulering": "Tsbi5: Thermal Simulation",
      "XSun: Solberegning": "XSun: Solar Calculation",
      "SimLight: Dagslysberegning": "SimLight: Daylight Calculation",
      "SimPV": "SimPV",
      "BEAT": "BEAT",
      "Radiance : Visualisering": "Radiance: Visualization",
      "Andre Windows programmer": "Other Windows Programs",
      "Det matematiske grundlag": "The Mathematical Basis",
      "Bv98: Varmebehovsberegning": "Bv98: Heating Demand Calculation",
      "Godt i gang med BSim": "Getting Started with BSim",
      "Revisioner": "Revisions",
      "Når jeg starter en simulering med tsbi5 foreslår programmet nogle gange et meget stort antal tidsskridt pr time. Hvad er årsagen til dette?":
        "When I start a simulation with tsbi5, the program sometimes suggests a very high number of time steps per hour. What causes this?"
    },
    articles: {
      "Sådan nulstiller du din adgangskode": "How to Reset Your Password",
      "Administrer dit abonnement": "Managing Your Subscription",
      "Installer programmet": "Install the Program",
      "Handelsbetingelser": "Terms of Sale",
      "Eksempel i forbindelse med tsbi5 simuleringen af temperaturforløbet i et atrium":
        "Example from tsbi5 simulation of atrium temperature profile",
      "Hvordan simulerer jeg solvægge i BSim?":
        "How do I simulate solar walls in BSim?",
      "Findes BSim på andre sprog end engelsk?":
        "Is BSim available in languages other than English?",
      "Hvordan tolkes versionsnummeret på programmet og i brugervejledningen?":
        "How is the version number interpreted in the software and the manual?",
      "Jeg kan ikke få simulering af gulvvarme til at fungere, hvad kan være årsagen?":
        "My underfloor heating simulation isn't working — what could be the cause?",
      "Jeg får fejlen \"PackCalc missing\"":
        "I get the error \"PackCalc missing\""
    }
  };

  function setLanguage(lang) {
    document.cookie = `lang=${lang.toUpperCase()}; path=/; max-age=31536000; SameSite=Lax`;
    location.reload();
  }

  function getLanguageFromCookie() {
    const cookies = document.cookie.split(";").map(c => c.trim());
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name && name.toLowerCase() === "lang") return value?.toLowerCase();
    }
    return null;
  }

  function detectInitialLanguage() {
    const lang = getLanguageFromCookie();
    if (lang) return lang;
    return (navigator.language || navigator.userLanguage || "").toLowerCase().startsWith("da") ? "da" : "en";
  }

  function updateLangVisibility(lang) {
    const da = document.getElementById("da");
    const en = document.getElementById("en");
    if (da) da.style.display = lang === "da" ? "block" : "none";
    if (en) en.style.display = lang === "en" ? "block" : "none";

    if (window.Outseta?.support?.teasers) {
      setTimeout(() => {
        try {
          window.Outseta.support.teasers.processTeasers();
        } catch (e) {}
      }, 100);
    }
  }

  function translateTitles(lang) {
    if (lang !== "en") return;

    const selectors = [
      "#nav-tabs li a",
      ".dropdown-menu a",
      "a.category h3.ng-binding",
      "h1.ng-binding",
      ".kb-article-link",
      ".kb-article-title",
      "strong.ng-binding",
      "span.ng-binding",
      "a.ng-binding"
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const text = (el.textContent || "").trim();
        const translated = translations.categories[text] || translations.articles[text];
        if (translated) el.textContent = translated;
      });
    });
  }

  (function () {
    if (!location.pathname.startsWith("/support/kb")) return;

    const lang = detectInitialLanguage();
    if (!getLanguageFromCookie()) {
      document.cookie = `lang=${lang.toUpperCase()}; path=/; max-age=31536000; SameSite=Lax`;
    }

    document.addEventListener("DOMContentLoaded", () => {
      // Add toggle buttons
      const toggle = document.createElement("div");
      toggle.className = "lang-toggle";
      toggle.innerHTML = `
        <button onclick="setLanguage('en')">English</button>
        <button onclick="setLanguage('da')">Dansk</button>
      `;
      document.body.appendChild(toggle);

      let observerTimer = null;

      const applyLang = () => {
        const currentLang = getLanguageFromCookie() || lang;
        updateLangVisibility(currentLang);
        // Delay actual translation until browser is idle or has rendered Angular
        setTimeout(() => {
          translateTitles(currentLang);
        }, 50);
      };

      const observer = new MutationObserver(() => {
        clearTimeout(observerTimer);
        observerTimer = setTimeout(applyLang, 100);
      });

      observer.observe(document.body, { childList: true, subtree: true });

      // Initial apply
      applyLang();
    });

    window.setLanguage = setLanguage;
  })();

function wrapImages() {
    requestAnimationFrame(() => { // Ensure this runs after Outseta's scripts
        document.querySelectorAll('img').forEach(img => {
            if (img.closest('figure')) return;

            if (img.parentElement.tagName.toLowerCase() === 'p') {
                const parentParagraph = img.parentElement;
                const figure = document.createElement('figure');
                figure.style.display = 'block';
                figure.style.maxWidth = '100%';
                figure.style.margin = '1em 0';
                parentParagraph.parentNode.insertBefore(figure, parentParagraph.nextSibling);
                figure.appendChild(img);

                const figcaption = document.createElement('figcaption');
                figcaption.textContent = img.alt || "";
                figure.appendChild(figcaption);

                console.log(`Wrapped image with alt text: ${img.alt}`);
            } else {
                const figure = document.createElement('figure');
                img.parentNode.insertBefore(figure, img);
                figure.appendChild(img);

                const figcaption = document.createElement('figcaption');
                figcaption.textContent = img.alt || "";
                figure.appendChild(figcaption);

                // console.log(`Wrapped image with alt text: ${img.alt}`);
            }
        });
    });
}

function startObserving() {
    const targetNode = document.body;

    if (!targetNode) {
        console.error("Document body is not yet available. Retrying...");
        setTimeout(startObserving, 100); // Try again in 100ms
        return;
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.querySelectorAll) { // Check if the added node is an element
                        if (node.querySelectorAll('img').length > 0 || node.tagName.toLowerCase() === 'img') {
                            wrapImages();
                        }
                    }
                });
            }
        });
    });

    // Start observing
    observer.observe(targetNode, { childList: true, subtree: true });

    // Initial run to wrap images already present
    wrapImages();

    // console.log("MutationObserver and Image Wrapping Script Initialized.");
}

// Ensure we wait until the document is fully ready

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    startObserving();
} else {
    document.addEventListener('DOMContentLoaded', startObserving);
}