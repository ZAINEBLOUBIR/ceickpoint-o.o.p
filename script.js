class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem extends Product {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
    getTotalPrice() {
        return this.price * this.quantity;
    }
}

class ShoppingCart {
    constructor(items) {
        this.items = items;
    }

    getTotalPrices() {
        return this.items.reduce((acc, i) => acc + i.getTotalPrice(), 0)
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter(i => i.id !== id);
    }

    displayItems() {
        for (let i of this.items) {
            console.log(${i.name} - ${i.quantity} x ${i.price} = ${i.getTotalPrice()});
        }
    }
}
//create instances of the Product class
let prod1 = new Product(1, 'prod1', 100)
let prod2 = new Product(2, 'prod2', 150)

//create shopping cart
let cart1 = new ShoppingCart([
    new ShoppingCartItem(1, 'Product 1', 10, 2),
    new ShoppingCartItem(2, 'Product 2', 20, 1),
    new ShoppingCartItem(3, 'Product 3', 15, 3)
])

cartItem = new ShoppingCartItem(4, 'Product 4', 100, 2)

cart1.addItem(cartItem)

cart1.displayItems()

cart1.removeItem(2)

cart1.displayItems()