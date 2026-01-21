const images = document.querySelectorAll('img[width][height]');

images.forEach(img => {
    img.removeAttribute('width');
    img.removeAttribute('height');
    img.classList.add('pict');
});