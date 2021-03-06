import Http from './Http'
import JWT from '../models/JWT'

class AuthService {
    logIn(user) {
        return Http.post('/auth/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            const jwt = new JWT(
                response.data.access_token,
                response.data.token_type,
                response.data.expires_in
            )

            localStorage.setItem('jwt', JSON.stringify(jwt));

            return Promise.resolve(jwt);
        });
    }

    socialLogin(driver, dataAuth) {
        return Http.post(`/auth/login/social/${driver}`, dataAuth).then(response => {
            const jwt = new JWT(
                response.data.access_token,
                response.data.token_type,
                response.data.expires_in
            )

            localStorage.setItem('jwt', JSON.stringify(jwt));

            return Promise.resolve(jwt);
        });
    }

    accountConfirmation(hash) {
        return Http.post('/account/confirmation', {
            hash
        }).then(response => {
            const jwt = new JWT(
                response.data.access_token,
                response.data.token_type,
                response.data.expires_in
            )

            localStorage.setItem('jwt', JSON.stringify(jwt));

            return Promise.resolve(jwt);
        });
    }

    logOut() {
        return Http.post('/auth/logout', {})
    }
}

export default new AuthService()