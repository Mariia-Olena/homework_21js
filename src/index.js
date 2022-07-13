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

function createOrder(order) {
    const res = [];
    order.forEach((elem, index) => {
        setTimeout(() => {
            res[index] = `${elem.item} done`;
        }, elem.time);
    });
    return res;
}

// eslint-disable-next-line no-unused-vars
const result = createOrder(menu.burgerMenu);

let count = 0;
const delay = 500;
const stop = 5;
let id = setTimeout(function tik() {
    count++;
    // eslint-disable-next-line no-console
    console.log(`Timer ${count}`);

    id = setTimeout(tik, delay);

    if (count === stop) {
        clearTimeout(id);
    }
}, delay);