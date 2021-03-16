class GoogleAuth {
    constructor(token_type, access_token, scope, login_hint, expires_in, id_token, session_state, first_issued_at, expires_at, idpId) {
        this.token_type = token_type || null;
        this.access_token = access_token || null;
        this.scope = scope || null;
        this.login_hint = login_hint || null;
        this.expires_in = expires_in || null;
        this.id_token = id_token || null;
        this.session_state = session_state || null;
        this.first_issued_at = first_issued_at || null;
        this.expires_at = expires_at || null;
        this.idpId = idpId || null;
    }
}

export default GoogleAuth;
