class Product {
    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Price = 0;
        this.Description = '';
        this.ImageUrl = '';
        this.Weight = 0;
        this.Width = 0;
        this.Depth = 0;
        this.Height = 0;
        this.Quantity = 0;
        this.Created = new Date();
        this.Updated = null;
        this.IsSold = false;
        this.SoldDate = null;
        this.Deleted = null;
    }

    static fromJson(json) {
        const product = new Product();
        product.Id = json.id;
        product.Name = json.name;
        product.Price = json.price;
        product.Description = json.description;
        product.ImageUrl = json.imageUrl;
        product.Weight = json.weight;
        product.Width = json.width;
        product.Depth = json.depth;
        product.Height = json.height;
        product.Quantity = json.quantity;
        product.Created = json.created;
        product.Updated = json.updated;
        product.IsSold = json.isSold;
        product.SoldDate = json.soldDate;
        product.Deleted = json.deleted;
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
