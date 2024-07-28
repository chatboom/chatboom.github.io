// Překlad jazyků v nastaveni.html
{
  const translations = {
        cz: {
          "language-header": "Jazyk",
          "appearance-header": "Vzhled",
          "darkMode": "Tmavé",
          "lightMode": "Světlé",
          "colorfulMode": "Barevné",
          "support-link": "Podpora",
          "account-link": "Účet",
          "title": "Nastavení webu",
          "cz": "Čeština",
          "en": "Angličtina",
          "pt": "Portugalština",
          "fr": "Francouzština",
          "it": "Italština",
          "de": "Němčina",
          "pl": "Polština",
          "sk": "Slovenština"
        },
        en: {
          "language-header": "Language",
          "appearance-header": "Appearance",
          "darkMode": "Dark",
          "lightMode": "Light",
          "colorfulMode": "Colorful",
          "support-link": "Support",
          "account-link": "Account",
          "title": "Website Settings",
          "cz": "Czech",
          "en": "English",
          "pt": "Portuguese",
          "fr": "French",
          "it": "Italian",
          "de": "German",
          "pl": "Polish",
          "sk": "Slovak"
        },
        pt: {
          "language-header": "Idioma",
          "appearance-header": "Aparência",
          "darkMode": "Escuro",
          "lightMode": "Claro",
          "colorfulMode": "Colorido",
          "support-link": "Suporte",
          "account-link": "Conta",
          "title": "Configurações do site",
          "cz": "Checo",
          "en": "Inglês",
          "pt": "Português",
          "fr": "Francês",
          "it": "Italiano",
          "de": "Alemão",
          "pl": "Polonês",
          "sk": "Eslovaco"
        },
        fr: {
          "language-header": "Langue",
          "appearance-header": "Apparence",
          "darkMode": "Sombre",
          "lightMode": "Clair",
          "colorfulMode": "Coloré",
          "support-link": "Support",
          "account-link": "Compte",
          "title": "Paramètres du site",
          "cz": "Tchèque",
          "en": "Anglais",
          "pt": "Portugais",
          "fr": "Français",
          "it": "Italien",
          "de": "Allemand",
          "pl": "Polonais",
          "sk": "Slovaque"
        },
        it: {
          "language-header": "Lingua",
          "appearance-header": "Aspetto",
          "darkMode": "Scuro",
          "lightMode": "Chiaro",
          "colorfulMode": "Colorato",
          "support-link": "Supporto",
          "account-link": "Account",
          "title": "Impostazioni del sito",
          "cz": "Ceco",
          "en": "Inglese",
          "pt": "Portoghese",
          "fr": "Francese",
          "it": "Italiano",
          "de": "Tedesco",
          "pl": "Polacco",
          "sk": "Slovacco"
        },
        de: {
          "language-header": "Sprache",
          "appearance-header": "Aussehen",
          "darkMode": "Dunkel",
          "lightMode": "Hell",
          "colorfulMode": "Bunt",
          "support-link": "Unterstützung",
          "account-link": "Konto",
          "title": "Website-Einstellungen",
          "cz": "Tschechisch",
          "en": "Englisch",
          "pt": "Portugiesisch",
          "fr": "Französisch",
          "it": "Italienisch",
          "de": "Deutsch",
          "pl": "Polnisch",
          "sk": "Slowakisch"
        },
        pl: {
          "language-header": "Język",
          "appearance-header": "Wygląd",
          "darkMode": "Ciemny",
          "lightMode": "Jasny",
          "colorfulMode": "Kolorowy",
          "support-link": "Wsparcie",
          "account-link": "Konto",
          "title": "Ustawienia witryny",
          "cz": "Czeski",
          "en": "Angielski",
          "pt": "Portugalski",
          "fr": "Francuski",
          "it": "Włoski",
          "de": "Niemiecki",
          "pl": "Polski",
          "sk": "Słowacki"
        },
        sk: {
          "language-header": "Jazyk",
          "appearance-header": "Vzhľad",
          "darkMode": "Tmavý",
          "lightMode": "Svetlý",
          "colorfulMode": "Farebný",
          "support-link": "Podpora",
          "account-link": "Účet",
          "title": "Nastavenia webu",
          "cz": "Čeština",
          "en": "Angličtina",
          "pt": "Portugalčina",
          "fr": "Francúzština",
          "it": "Taliančina",
          "de": "Nemčina",
          "pl": "Poľština",
          "sk": "Slovenčina"
        }
      };
  
      function setLanguage(languageCode) {
        localStorage.setItem('language', languageCode);
        updateText();
      }
  
      function updateText() {
        const languageCode = localStorage.getItem('language') || 'cz';
        const text = translations[languageCode];
  
        document.getElementById('language-header').innerText = text['language-header'];
        document.getElementById('appearance-header').innerText = text['appearance-header'];
        document.getElementById('darkMode').innerText = text['darkMode'];
        document.getElementById('lightMode').innerText = text['lightMode'];
        document.getElementById('colorfulMode').innerText = text['colorfulMode'];
        document.getElementById('support-link').innerText = text['support-link'];
        document.getElementById('account-link').innerText = text['account-link'];
        document.title = text['title'];
  
        // Update language options
        document.getElementById('cz').innerText = text['cz'];
        document.getElementById('en').innerText = text['en'];
        document.getElementById('pt').innerText = text['pt'];
        document.getElementById('fr').innerText = text['fr'];
        document.getElementById('it').innerText = text['it'];
        document.getElementById('de').innerText = text['de'];
        document.getElementById('pl').innerText = text['pl'];
        document.getElementById('sk').innerText = text['sk'];
      }
  
      function toggleList(listId) {
        var list = document.getElementById(listId);
        if (list.style.display === "block") {
          list.style.display = "none";
        } else {
          // Hide all lists except the one clicked
          var allLists = document.querySelectorAll('.section ul');
          allLists.forEach(function(lst) {
            lst.style.display = 'none';
          });
          list.style.display = "block";
        }
      }
  
      // Initialize page with the saved language
      document.addEventListener('DOMContentLoaded', updateText);
    }
  

// Funkce pro změnu barvy pozadí
function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.target.value;
  localStorage.setItem('background-color', event.target.value);
}

// Ukázková funkce pro změnu jazyka (může být rozšířena)
function setLanguage(languageCode) {
  console.log("Jazyk změněn na: " + languageCode);
  // Implementujte logiku změny jazyka zde
}

// Inicializace režimu vzhledu a barvy pozadí z localStorage
function initializeAppearance() {
  const savedMode = localStorage.getItem('appearance-mode') || 'light'; // Výchozí režim je světlý
  changeAppearance(savedMode);

  // Načtení uložené barvy pozadí, pokud je k dispozici
  const savedColor = localStorage.getItem('background-color');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

// Zavolání initializeAppearance při načtení stránky
window.onload = initializeAppearance;

// Zobrazení výběru barev
function showColorPicker() {
  changeAppearance('colorful');
}
