export default function auth({ next, router, store }) {

    if (!store.getters.isAuth) {
        return store.dispatch("logOut").then(() => router.push({ name: 'Login' }).catch(() => { }));
    }

    return next();
}