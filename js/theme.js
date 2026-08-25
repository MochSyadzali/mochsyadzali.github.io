(function () {
  const storedTheme = localStorage.getItem('portfolio-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.dataset.theme = storedTheme || preferredTheme;

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('#theme-toggle');
    if (!toggle) return;
    const updateLabel = () => {
      const isDark = document.documentElement.dataset.theme === 'dark';
      toggle.textContent = isDark ? '☼' : '◐';
      toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    };
    updateLabel();
    toggle.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      localStorage.setItem('portfolio-theme', theme);
      updateLabel();
    });
  });
}());
