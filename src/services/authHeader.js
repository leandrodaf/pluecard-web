export default function authHeader() {
    let jwt = JSON.parse(localStorage.getItem('jwt'));

    if (jwt && jwt.accessToken) {
        return { 'Authorization': `bearer ${jwt.accessToken}` };
    } else {
        return {};
    }
}