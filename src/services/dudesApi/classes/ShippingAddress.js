class ShippingAddress {
    constructor() {
        this.id = 0;
        this.orderId = 0;
        this.addressId = 0;
        this.created = new Date();
        this.deleted = null;
    }

    static fromJson(json) {
        const shippingAddress = new ShippingAddress();
        shippingAddress.id = json.id;
        shippingAddress.orderId = json.orderId;
        shippingAddress.addressId = json.addressId;
        shippingAddress.created = json.created;
        shippingAddress.deleted = json.deleted;
        return shippingAddress;
    }

    toJson() {
        return {
            id: this.id,
            orderId: this.orderId,
            addressId: this.addressId,
            created: this.created,
            deleted: this.deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(ShippingAddress.fromJson);
    }

    static toJsonList(shippingAddressList) {
        return shippingAddressList.map((shippingAddress) => shippingAddress.toJson());
    }
}

export default ShippingAddress;
