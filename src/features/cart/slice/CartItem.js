class CartItem {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    get total() {
        return this.price * this.quantity;
    }
    increment() {
        this.quantity++;
    }
    decrement() {
        this.quantity--;
    }
    static fromProduct(product) {
        return new CartItem(product.id, product.name, product.price, 1);
    }
    static fromJSON(json) {
        return new CartItem(json.id, json.name, json.price, json.quantity);
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
        };
    }
}

export default CartItem;
