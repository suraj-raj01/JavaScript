let product = [
    {
        id: 1001,
        price: 22500,
    }
    ,
    {
        id: 1002,
        price: 12500,
    },
    {
        id: 10003,
        price: 49500,
    },
    {
        id: 1004,
        price: 25000,
    },
    {
        id: 1005,
        price: 32500,
    }
];

let a = product.filter((e) => { return e.price > 20000 && e.price < 45000 });
console.log(a);