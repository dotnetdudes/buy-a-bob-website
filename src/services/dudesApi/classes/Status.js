class Status {
    constructor() {
        this.id = 0;
        this.name = '';
        this.created = new Date();
        this.updated = null;
        this.deleted = null;
    }

    static fromJson(json) {
        const status = new Status();
        status.id = json.id;
        status.name = json.name;
        status.created = json.created;
        status.updated = json.updated;
        status.deleted = json.deleted;
        return status;
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
        return jsonList.map(Status.fromJson);
    }

    static toJsonList(statusList) {
        return statusList.map((status) => status.toJson());
    }
}

export default Status;
