export default function auth({ next, router, store }) {

    if (!store.getters.isAuth) {
        return router.push({ name: 'Login' }).catch(() => { });
    }

    return next();
}