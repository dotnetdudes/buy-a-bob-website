class ShippingType {
    constructor() {
        this.id = 0;
        this.name = '';
        this.created = new Date();
        this.updated = null;
        this.deleted = null;
    }

    static fromJson(json) {
        const shippingType = new ShippingType();
        shippingType.id = json.id;
        shippingType.name = json.name;
        shippingType.created = json.created;
        shippingType.updated = json.updated;
        shippingType.deleted = json.deleted;
        return shippingType;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            created: this.created,
            updated: this.updated,
            deleted: this.deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(ShippingType.fromJson);
    }

    static toJsonList(shippingTypeList) {
        return shippingTypeList.map((shippingType) => shippingType.toJson());
    }
}

export default ShippingType;
