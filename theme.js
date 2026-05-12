document.addEventListener('DOMContentLoaded', function () {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  function syncLabel() {
    var theme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    toggle.setAttribute('title', 'Switch to ' + next + ' mode');
  }

  syncLabel();

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    syncLabel();
  });
});
