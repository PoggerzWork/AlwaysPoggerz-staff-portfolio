'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}));
const copyButton = document.getElementById('copy-discord');
const copyStatus = document.getElementById('copy-status');
copyButton?.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('AlwaysPoggerz');
    copyButton.textContent = 'Copied: AlwaysPoggerz ✓';
    copyStatus.textContent = 'Discord username copied';
  } catch {
    copyButton.textContent = 'Discord: AlwaysPoggerz';
    copyStatus.textContent = 'Select and copy AlwaysPoggerz';
  }
});
