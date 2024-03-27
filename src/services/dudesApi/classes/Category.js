class Category {
    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Created = new Date();
        this.Updated = null;
        this.Deleted = null;
    }

    static fromJson(json) {
        const category = new Category();
        category.Id = json.id;
        category.Name = json.name;
        category.Created = json.created;
        category.Updated = json.updated;
        category.Deleted = json.deleted;
        return category;
    }

    toJson() {
        return {
            id: this.Id,
            name: this.Name,
            created: this.Created,
            updated: this.Updated,
            deleted: this.Deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(Category.fromJson);
    }

    static toJsonList(categoryList) {
        return categoryList.map((category) => category.toJson());
    }
}

export default Category;
