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
            id: this.Id,
            name: this.Name,
            price: this.Price,
            description: this.Description,
            imageUrl: this.ImageUrl,
            weight: this.Weight,
            width: this.Width,
            depth: this.Depth,
            height: this.Height,
            quantity: this.Quantity,
            created: this.Created,
            updated: this.Updated,
            isSold: this.IsSold,
            soldDate: this.SoldDate,
            deleted: this.Deleted,
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
