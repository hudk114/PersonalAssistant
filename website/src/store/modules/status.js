

const state = {
    bodyLoading: false,
};

const mutations = {
    triggerBodyLoading(state) {
        state.bodyLoading = true;
    },
    cancelBodyLoading(state) {
        state.bodyLoading = false;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
