let items = {
    'ручка': 20,
    'альбом': 16,
    'тетрадь': 10
};

let itemsArray = Object.entries(items);

itemsArray.sort((a, b) => a[1] - b[1]);

let sortedItems = Object.fromEntries(itemsArray);

console.log(sortedItems);