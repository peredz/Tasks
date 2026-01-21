const elementsWithThreeChildren = [];

function checkElements(element) {
    if (element.children.length === 3) {
        elementsWithThreeChildren.push(element);
    }

    for (const child of element.children) {
        checkElements(child);
    }
}

checkElements(document.body);

console.log('Элементы с 3 потомками:', elementsWithThreeChildren);