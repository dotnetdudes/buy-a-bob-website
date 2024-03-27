class Tag {
    constructor() {
        this.id = 0;
        this.name = '';
        this.created = new Date();
        this.updated = null;
        this.deleted = null;
    }

    static fromJson(json) {
        const tag = new Tag();
        tag.id = json.id;
        tag.name = json.name;
        tag.created = json.created;
        tag.updated = json.updated;
        tag.deleted = json.deleted;
        return tag;
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
        return jsonList.map(Tag.fromJson);
    }

    static toJsonList(tagList) {
        return tagList.map((tag) => tag.toJson());
    }
}

export default Tag;
