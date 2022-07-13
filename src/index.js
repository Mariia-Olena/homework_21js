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
    order.forEach((elem, index) => {
        setTimeout(() => {
            cb(`${elem.item} done`, index);
        }, elem.time);
    });
}

const res = [];
createOrder(menu.burgerMenu, (result, index) => {
    res[index] = result;
});


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