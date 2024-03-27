class Customer {
    constructor() {
        this.Id = 0;
        this.Identifier = '';
        this.FirstName = '';
        this.LastName = '';
        this.Email = '';
        this.Created = new Date().toISOString();
        this.Updated = null;
        this.Deleted = null;
        this.Addresses = [];
    }

    static fromJson(json) {
        const customer = new Customer();
        customer.Id = json.id;
        customer.Identifier = json.identifier;
        customer.FirstName = json.firstName;
        customer.LastName = json.lastName;
        customer.Email = json.email;
        customer.Created = json.created;
        customer.Updated = json.updated;
        customer.Deleted = json.deleted;
        customer.Addresses = json.addresses;
        return customer;
    }

    toJson() {
        return {
            id: this.Id,
            identifier: this.Identifier,
            firstName: this.FirstName,
            lastName: this.LastName,
            email: this.Email,
            created: this.Created,
            updated: this.Updated,
            deleted: this.Deleted,
            addresses: this.Addresses,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(Customer.fromJson);
    }

    static toJsonList(customerList) {
        return customerList.map((customer) => customer.toJson());
    }
}

export default Customer;
