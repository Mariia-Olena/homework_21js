const menu = {
    burgerMenu: [
        {
            item: 'Burger',
            time: 2000
        },
        {
            item: 'Cola',
            time: 500
        },
        {
            item: 'Ff',
            time: 1000
        }
    ],

    pizzaMenu: [
        {
            item: 'Pizza',
            time: 3000
        },
        {
            item: 'Pepsi',
            time: 500
        },
        {
            item: 'souse',
            time: 500
        }
    ]
};

function createOrder(order, cb) {
    const res = [];

    order.forEach((elem, index) => {
        setTimeout(() => {
            res[index] = `${elem.item} done`;
            if (Object.keys(res).length === order.length) {
                cb(res);
            }
        }, elem.time);
    });

}

createOrder(menu.burgerMenu, (arr) => {
    // eslint-disable-next-line no-console
    console.log(arr);
});


let count = 0;
const delay = 500;
const stop = 5;
let id = setTimeout(function tik() {
    count++;
    // console.log(`Timer ${count}`);

    id = setTimeout(tik, delay);

    if (count === stop) {
        clearTimeout(id);
    }
}, delay);