export const state = () => ({
    workspace: []
});

export const getters = {
    workspace(state){
        return state.workspace;
    }
};

export const mutations = {
    SET_WORKSPACE(state, workspace){
        state.workspace = workspace
    }
}

export const actions = {
    async setWorkspace({commit}, id){
        const response = (await this.$axios.$get('api/projects?project_id='+id)).data;
        commit("SET_WORKSPACE", response);
    }
}