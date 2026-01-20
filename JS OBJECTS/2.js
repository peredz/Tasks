let Obj = {
    apple: 10,
    orange: 5
};

let newObj = {
    apple: 7
};

let key = Object.keys(newObj)[0];
let value = newObj[key];

if (key in Obj) {
    Obj[key] += value;
} else {
    Obj[key] = value;
}

alert(Object.values(Obj));