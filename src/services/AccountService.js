import Http from './Http'
// import User from '../models/User'

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
        })
    }
}

export default new AccountService()