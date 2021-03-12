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

    logOut() {
        localStorage.removeItem('jwt');
    }
}

export default new AuthService()