import Vue from 'vue';
import Vuex from 'vuex';
import enumData from './modules/enumData';
import charge from './modules/charge';
import status from './modules/status';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        enumData,
        charge,
        status,
    }
});
