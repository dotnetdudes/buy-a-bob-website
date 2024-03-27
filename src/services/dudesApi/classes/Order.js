class Order {
    constructor() {
        this.Id = 0;
        this.CartId = 0;
        this.StatusId = 0;
        this.SubTotal = 0.0;
        this.Tax = 0.0;
        this.ShippingTypeId = 0;
        this.Shipping = 0.0;
        this.ShippingAddressId = 0;
        this.ContactName = null;
        this.ContactPhone = null;
        this.Total = 0.0;
        this.DatePurchased = new Date();
        this.DateShipped = null;
        this.Deleted = null;
    }

    static fromJson(json) {
        const order = new Order();
        order.Id = json.id;
        order.CartId = json.cartId;
        order.StatusId = json.statusId;
        order.SubTotal = json.subTotal;
        order.Tax = json.tax;
        order.ShippingTypeId = json.shippingTypeId;
        order.Shipping = json.shipping;
        order.ShippingAddressId = json.shippingAddressId;
        order.ContactName = json.contactName;
        order.ContactPhone = json.contactPhone;
        order.Total = json.total;
        order.DatePurchased = json.datePurchased;
        order.DateShipped = json.dateShipped;
        order.Deleted = json.deleted;
        return order;
    }

    toJson() {
        return {
            id: this.Id,
            cartId: this.CartId,
            statusId: this.StatusId,
            subTotal: this.SubTotal,
            tax: this.Tax,
            shippingTypeId: this.ShippingTypeId,
            shipping: this.Shipping,
            shippingAddressId: this.ShippingAddressId,
            contactName: this.ContactName,
            contactPhone: this.ContactPhone,
            total: this.Total,
            datePurchased: this.DatePurchased,
            dateShipped: this.DateShipped,
            deleted: this.Deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(Order.fromJson);
    }

    static toJsonList(orderList) {
        return orderList.map((order) => order.toJson());
    }
}

export default Order;
