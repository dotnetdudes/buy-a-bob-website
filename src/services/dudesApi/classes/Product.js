class Product {
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.description = '';
        this.imageUrl = '';
        this.weight = 0;
        this.width = 0;
        this.depth = 0;
        this.height = 0;
        this.quantity = 0;
        this.created = new Date();
        this.updated = null;
        this.isSold = false;
        this.soldDate = null;
        this.deleted = null;
    }

    static fromJson(json) {
        const product = new Product();
        product.id = json.id;
        product.name = json.name;
        product.price = json.price;
        product.description = json.description;
        product.imageUrl = json.imageUrl;
        product.weight = json.weight;
        product.width = json.width;
        product.depth = json.depth;
        product.height = json.height;
        product.quantity = json.quantity;
        product.created = json.created;
        product.updated = json.updated;
        product.isSold = json.isSold;
        product.soldDate = json.soldDate;
        product.deleted = json.deleted;
        return product;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            imageUrl: this.imageUrl,
            weight: this.weight,
            width: this.width,
            depth: this.depth,
            height: this.height,
            quantity: this.quantity,
            created: this.created,
            updated: this.updated,
            isSold: this.isSold,
            soldDate: this.soldDate,
            deleted: this.deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(Product.fromJson);
    }

    static toJsonList(products) {
        return products.map((product) => product.toJson());
    }
}

export default Product;
