// Highlight the lesson most recently selected in the collection navigation.
document.querySelectorAll('.lesson-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.lesson-nav a').forEach(item => {
      item.classList.remove('active');
      item.removeAttribute('aria-current');
    });
    link.classList.add('active');
    link.setAttribute('aria-current', 'location');
  });
});
