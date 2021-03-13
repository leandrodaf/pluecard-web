import axios from 'axios'
import Config from '../configs/config.json'
import HttpResponse from '../models/HttpResponse'
import authHeader from './authHeader'

const instance = axios.create({
    baseURL: Config.services.pluecard.host,
    timeout: 3000
});

class Http {
    get(path) {
        return instance.get(path, { headers: authHeader() }).then((response) => {
            return Promise.resolve(new HttpResponse(response.data.data, response.status))
        }).catch((error) => {
            return Promise.reject(new HttpResponse(error.response.data.data, error.response.status))
        });
    }

    post(path, data) {
        return instance.post(path, data, { headers: authHeader() }).then((response) => {
            return Promise.resolve(new HttpResponse(response.data.data, response.status))
        }).catch((error) => {
            return Promise.reject(new HttpResponse(error.response.data.data, error.response.status))
        });
    }

    put(path, data) {
        return instance.put(path, data, { headers: authHeader() }).then((response) => {
            return Promise.resolve(new HttpResponse(response.data.data, response.status))
        }).catch((error) => {
            return Promise.reject(new HttpResponse(error.response.data.data, error.response.status))
        });
    }

    deleted(path) {
        return instance.delete(path, { headers: authHeader() }).then((response) => {
            return Promise.resolve(new HttpResponse(response.data.data, response.status))
        }).catch((error) => {
            return Promise.reject(new HttpResponse(error.response.data.data, error.response.status))
        });
    }

}

export default new Http()
