class Address {
    constructor() {
        this.Id = 0;
        this.CustomerId = 0;
        this.Street = '';
        this.Suburb = '';
        this.City = '';
        this.State = '';
        this.Postcode = '';
        this.Country = '';
        this.Created = new Date();
        this.Updated = null;
        this.Deleted = null;
    }

    static fromJson(json) {
        const address = new Address();
        address.Id = json.id;
        address.CustomerId = json.customerId;
        address.Street = json.street;
        address.Suburb = json.suburb;
        address.City = json.city;
        address.State = json.state;
        address.Postcode = json.postcode;
        address.Country = json.country;
        address.Created = json.created;
        address.Updated = json.updated;
        address.Deleted = json.deleted;
        return address;
    }

    toJson() {
        return {
            id: this.Id,
            customerId: this.CustomerId,
            street: this.Street,
            suburb: this.Suburb,
            city: this.City,
            state: this.State,
            postcode: this.Postcode,
            country: this.Country,
            created: this.Created,
            updated: this.Updated,
            deleted: this.Deleted,
        };
    }

    static fromJsonList(jsonList) {
        return jsonList.map(Address.fromJson);
    }

    static toJsonList(addressList) {
        return addressList.map((address) => address.toJson());
    }
}

export default Address;
