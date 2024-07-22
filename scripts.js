
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
        "title": "Nastavenia webu",
        "cz": "Čeština",
        "en": "Angličtina",
        "pt": "Portugalčina",
        "fr": "Francúzština",
        "it": "Taliančina",
        "de": "Nemčina",
        "pl": "Poľština",
        "sk": "Slovenčina"
      },
      
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
      document.getElementById('es').innerText = text['es'];
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




  // Funkce pro přepínání viditelnosti seznamů
function toggleList(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    // Skrytí všech seznamů kromě toho, na který bylo kliknuto
    var allLists = document.querySelectorAll('.section ul');
    allLists.forEach(function(lst) {
      lst.style.display = 'none';
    });
    list.style.display = "block";
  }
}

// Funkce pro změnu režimu vzhledu
function changeAppearance(mode) {
  // Odstranění existujících tříd režimu vzhledu
  document.body.classList.remove('dark-mode', 'light-mode');
  document.getElementById('color-picker').style.display = 'none'; // Skrytí výběru barev

  // Přidání třídy pro vybraný režim a nastavení barvy pozadí
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.style.backgroundColor = '#333'; // Šedá barva pro tmavý režim
    localStorage.setItem('appearance-mode', 'dark');
    localStorage.setItem('background-color', '#333');
  } else if (mode === 'light') {
    document.body.classList.add('light-mode');
    document.body.style.backgroundColor = '#f0f0f0'; // Světlá barva pro světlý režim
    localStorage.setItem('appearance-mode', 'light');
    localStorage.setItem('background-color', '#f0f0f0');
  } else if (mode === 'colorful') {
    document.getElementById('color-picker').style.display = 'block'; // Zobrazení výběru barev
    // Neprovádíme změnu barvy pozadí, protože uživatel může vybrat barvu
    localStorage.setItem('appearance-mode', 'colorful');
  }
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
