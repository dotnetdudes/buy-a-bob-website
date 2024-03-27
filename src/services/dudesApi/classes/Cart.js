class Cart {
    constructor() {
        this.Id = 0;
        this.CustomerId = 0;
        this.StatusId = 1;
        this.Items = [];
        this.Created = new Date();
        this.Updated = null;
        this.Deleted = null;
    }

    static fromJson(json) {
        const cart = new Cart();
        cart.Id = json.id;
        cart.CustomerId = json.customerId;
        cart.StatusId = json.statusId;
        cart.Items = json.items;
        cart.Created = json.created;
        cart.Updated = json.updated;
        cart.Deleted = json.deleted;
        return cart;
    }

    toJson() {
        return {
            id: this.Id,
            customerId: this.CustomerId,
            statusId: this.StatusId,
            items: this.Items,
            created: this.Created,
            updated: this.Updated,
            deleted: this.Deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(Cart.fromJson);
    }

    static toJsonList(cartList) {
        return cartList.map((cart) => cart.toJson());
    }
}

export default Cart;
