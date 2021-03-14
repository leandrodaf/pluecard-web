import Vue from "vue";
import { ValidationProvider, extend, ValidationObserver, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import pt_BR from "vee-validate/dist/locale/pt_BR.json";

localize('pt_BR', pt_BR);

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);