import { chargeService } from '@ser/charge';

const state = {

};

const mutations = {

};

const actions = {
    addChargeRecord({ chargeRecord, fn, fnErr }) {
        chargeService.addChargeRecord({ chargeRecord }, fn, fnErr);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
