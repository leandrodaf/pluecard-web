class User {
    constructor(id, name, password, email, accept_terms, newsletter, discount_coupons, confirmation_email, created_at, updated_at) {
        this.id = id || null;
        this.name = name || null;
        this.password = password || null;
        this.email = email || null;
        this.accept_terms = accept_terms || null;
        this.newsletter = newsletter || null;
        this.discount_coupons = discount_coupons || null;
        this.confirmation_email = confirmation_email || null;
        this.created_at = created_at || null;
        this.updated_at = updated_at || null;
    }
}

export default User;
