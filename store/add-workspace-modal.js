export const state = () => ({
    showModal: false
})

export const getters = {
    showModal(state){
        return state.showModal;
    }
}

export const mutations = {
    SHOW(state){
        state.showModal = true;
    },
    HIDE(state){
        state.showModal = false;
    }
}