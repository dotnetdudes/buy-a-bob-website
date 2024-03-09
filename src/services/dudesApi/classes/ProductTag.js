class ProductTag {
    constructor() {
        this.id = 0;
        this.productId = 0;
        this.tagId = 0;
        this.created = new Date();
        this.deleted = null;
    }

    static fromJson(json) {
        const productTag = new ProductTag();
        productTag.id = json.id;
        productTag.productId = json.productId;
        productTag.tagId = json.tagId;
        productTag.created = json.created;
        productTag.deleted = json.deleted;
        return productTag;
    }

    toJson() {
        return {
            id: this.id,
            productId: this.productId,
            tagId: this.tagId,
            created: this.created,
            deleted: this.deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(ProductTag.fromJson);
    }

    static toJsonList(productTagList) {
        return productTagList.map((productTag) => productTag.toJson());
    }
}

export default ProductTag;
