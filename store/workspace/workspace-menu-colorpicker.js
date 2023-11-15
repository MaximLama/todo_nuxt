export const state = () => ({
    isPopupOpen: false,
    top: '',
    color: ''
});

//getters
export const getters = {
    isPopupOpen(state){
        return state.isPopupOpen;
    },
    top(state){
        return state.top;
    },
    color(state){
        return state.color;
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
    SET_COLOR(state, color){
        state.color = color;
    },
}

//actions
export const actions = {
    setIsPopupOpen({commit}, isPopupOpen){
        commit("SET_IS_POPUP_OPEN", isPopupOpen);
    },
    setTop({commit}, top){
        commit("SET_TOP", top);
    },
    setColor({commit}, color){
        commit("SET_COLOR", color);
    },
    setPopupData({dispatch}, popupData){
        dispatch('setIsPopupOpen', popupData.isPopupOpen);
        dispatch('setTop', popupData.top);
        dispatch('setColor', popupData.color);
    }
}