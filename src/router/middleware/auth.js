export default function auth({ next, router, store }) {

    if (!store.getters.isAuth) {
        return store.dispatch("cleanError").then(() => router.push({ name: 'Login' }).catch(() => { }));
    }

    return next();
}