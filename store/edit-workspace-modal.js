export const state = () => ({
    showModal: false,
    id: null,
    color: '',
    title: ''
});

export const getters = {
    showModal(state){
        return state.showModal;
    },
    id(state){
        return state.id;
    },
    color(state){
        return state.color;
    },
    title(state){
        return state.title;
    }
};

export const mutations = {
    SET_MODAL_STATE(state, modal_state){
        state.showModal = modal_state.showModal;
        state.id = modal_state.id;
        state.color = modal_state.color;
        state.title = modal_state.title;
    },
    HIDE_MODAL(state){
        state.showModal = false;
        state.id = null;
        state.color = '';
        state.title = '';
    }
}