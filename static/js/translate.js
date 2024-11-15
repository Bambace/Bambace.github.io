async function loadTranslations(lang) {
    const response = await fetch(`locales/${lang}.json`);
    const translations = await response.json();
  
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[key];
    });
  }
  
  function setLanguage(lang) {
    loadTranslations(lang);
    localStorage.setItem('language', lang);
  }
  
  // Detecta el idioma guardado o establece el idioma predeterminado
  const savedLanguage = localStorage.getItem('language') || 'en';
  setLanguage(savedLanguage);
  