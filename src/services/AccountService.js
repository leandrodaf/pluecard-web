import Http from './Http'

import User from '../models/User'

class AccountService {
    register(user) {
        return Http.post('account/create', {
            name: user.name,
            email: user.email,
            accept_terms: true,
            password: user.password,
            password_confirmation: user.password,
            newsletter: false,
            discount_coupons: false
        });
    }

    forgotPassword(user) {
        return Http.post('/account/password/forgot', {
            email: user.email
        });
    }

    loadUserContext() {
        return Http.get('users/me').then(response => {
            const user = new User(
                response.data.id,
                response.data.name,
                response.data.password,
                response.data.email,
                response.data.accept_terms,
                response.data.newsletter,
                response.data.discount_coupons,
                response.data.confirmation_email,
                response.data.created_at,
                response.data.updated_at,
                response.data.password_confirmation
            );

            localStorage.setItem('userContext', JSON.stringify(user));

            return Promise.resolve(user);
        });
    }

    confirmForgotPassword(user, hash) {
        const { password, password_confirmation } = user;

        return Http.put('/account/password/forgot/reset', {
            password,
            password_confirmation,
            hash
        })
    }

}

export default new AccountService()