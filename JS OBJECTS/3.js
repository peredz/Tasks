let objGoods = {
    "ручка": [100, 50.60],
    "карандаш": [120, 30.00],
    "тетрадь": [200, 10.50]
};

let goods = [];

for (let itemName in objGoods) {
    let values = objGoods[itemName];

    for (let i = 0; i < values.length; i++) {
        goods.push({
            "name": itemName,
            "amount": values[i]
        });
    }
}

console.log(Ogoods);