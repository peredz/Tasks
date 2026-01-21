const lists = document.querySelectorAll('ol');

lists.forEach(ol => {
    const items = ol.children;

    for (let i = 1; i < items.length; i += 2) {
        items[i].style.display = 'none';
    }
});