class JWT {
    constructor(accessToken, tokenType, expiresIn) {
        this.accessToken = accessToken || null;
        this.tokenType = tokenType || null;
        this.expiresIn = expiresIn || null;
    }
}

export default JWT;
