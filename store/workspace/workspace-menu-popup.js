export const state = () => ({
    isPopupOpen: false,
    top: '',
    baseTop:'',
    id: ''
});

//getters
export const getters = {
    isPopupOpen(state){
        return state.isPopupOpen;
    },
    top(state){
        return state.top;
    },
    baseTop(state){
        return state.baseTop;
    },
    id(state){
        return state.id;
    }
}

//mutations
export const mutations = {
    SET_IS_POPUP_OPEN(state, isPopupOpen){
        state.isPopupOpen = isPopupOpen;
    },
    SET_TOP(state, top){
        state.top = top;
    },
    SET_BASE_TOP(state, top){
        state.baseTop = top;
    },
    SET_WORKSPACE_ID(state, id){
        state.id = id;
    }
}

//actions
export const actions = {
    setIsPopupOpen({commit}, isPopupOpen){
        commit("SET_IS_POPUP_OPEN", isPopupOpen);
    },
    setTop({commit}, top){
        commit("SET_TOP", top);
    },
    setBaseTop({commit}, top){
        commit("SET_BASE_TOP", top);
    },
    setWorkspaceId({commit}, id){
        commit("SET_WORKSPACE_ID", id);
    },
    setPopupData({dispatch}, popupData){
        dispatch('setIsPopupOpen', popupData.isPopupOpen);
        dispatch('setTop', popupData.top);
        dispatch('setBaseTop', popupData.top);
        dispatch('setWorkspaceId', popupData.id);
    }
}