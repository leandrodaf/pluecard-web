import Http from './Http'

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