let object1 = {
    '1': 1,
    '2': "ss",
    '3': 29.3
};

let newObject1 = {};

for (let key in object1) {
    if (!isNaN(object1[key])) {
        newObject1[key] = object1[key];
    }
}

alert(Object.values(newObject1));