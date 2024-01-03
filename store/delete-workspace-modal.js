export const state = () => ({
    showModal: false,
    id: null
});

export const getters = {
    showModal(state){
        return state.showModal;
    },
    id(state){
        return state.id;
    }
};

export const mutations = {
    SET_MODAL_STATE(state, modal_state){
        state.showModal = modal_state.showModal;
        state.id = modal_state.id;
    },
    HIDE_MODAL(state){
        state.showModal = false;
        state.id = null;
    }
}