export default function userContext({ next, store }) {

    if (store.getters.isAuth && !store.getters.getUserContext) {
        store.dispatch("loadUserContext");
    }

    return next();
}