const allElements = document.querySelectorAll('*');

allElements.forEach(el => {
    el.removeAttribute('align');
    el.removeAttribute('width');
    el.removeAttribute('height');
});
