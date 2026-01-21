const paragraphs = ['C++', 'Python', 'C#', 'SQL', 'JavaScript', 'PHP'];

const container = document.getElementById('text');

container.innerHTML = '';

paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    container.appendChild(p);
});