class CartItem {
    constructor() {
        this.Id = 0;
        this.CartId = 0;
        this.ProductId = 0;
        this.Price = 0;
        this.Quantity = 0;
        this.Created = new Date().toISOString();
        this.Updated = null;
        this.Deleted = null;
    }

    static fromJson(json) {
        const cartItem = new CartItem();
        cartItem.Id = json.id;
        cartItem.CartId = json.cartId;
        cartItem.ProductId = json.productId;
        cartItem.Price = json.price;
        cartItem.Quantity = json.quantity;
        cartItem.Created = json.created;
        cartItem.Updated = json.updated;
        cartItem.Deleted = json.deleted;
        return cartItem;
    }

    toJson() {
        return {
            id: this.Id,
            cartId: this.CartId,
            productId: this.ProductId,
            price: this.Price,
            quantity: this.Quantity,
            created: this.Created,
            updated: this.Updated,
            deleted: this.Deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(CartItem.fromJson);
    }

    static toJsonList(cartItemList) {
        return cartItemList.map((cartItem) => cartItem.toJson());
    }
}

export default CartItem;
