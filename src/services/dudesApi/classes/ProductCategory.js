class ProductCategory {
    constructor() {
        this.Id = 0;
        this.ProductId = 0;
        this.CategoryId = 0;
        this.Created = new Date();
        this.Deleted = null;
    }

    static fromJson(json) {
        const productCategory = new ProductCategory();
        productCategory.Id = json.id;
        productCategory.ProductId = json.productId;
        productCategory.CategoryId = json.categoryId;
        productCategory.Created = json.created;
        productCategory.Deleted = json.deleted;
        return productCategory;
    }

    toJson() {
        return {
            id: this.Id,
            productId: this.ProductId,
            categoryId: this.CategoryId,
            created: this.Created,
            deleted: this.Deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(ProductCategory.fromJson);
    }

    static toJsonList(productCategoryList) {
        return productCategoryList.map((productCategory) => productCategory.toJson());
    }
}

export default ProductCategory;
