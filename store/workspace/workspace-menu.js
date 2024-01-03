export const state = () => ({
    workspaces: []
});

export const getters = {
    workspaces(state){
        return state.workspaces;
    },
    color: (state) => (id) => {
        const workspaces = state.workspaces.filter( workspace => workspace.id == id);
        return workspaces.length ? workspaces[0].color : null;   
    }
};

export const mutations = {
    SET_WORKSPACES(state, workspaces){
        state.workspaces = workspaces
    },
    SET_WORKSPACE_COLOR(state, workspaceData){
        state.workspaces.filter( workspace => workspace.id == workspaceData.id)[0].color = workspaceData.color;
    },
    SET_EDIT_NAME(state, workspaceData){
        state.workspaces.filter( workspace => workspace.id == workspaceData.id)[0].editTitle = workspaceData.editTitle;
    },
    SET_NAME(state, workspaceData){
        state.workspaces.filter( workspace => workspace.id == workspaceData.id)[0].title = workspaceData.title;
    },
    ADD_WORKSPACE(state, workspace){
        state.workspaces.push(workspace);
    },
    DELETE_WORKSPACE(state, id){
        state.workspaces.splice(state.workspaces.findIndex(workspace => workspace.id === id), 1);
    }
}

export const actions = {
    async setWorkspaces({commit}, idActive = null){
        const response = (await this.$axios.$get('api/projects')).data;
        response.forEach(workspace => {
            workspace.editTitle = false;
            if (idActive){
                workspace.active = workspace.id == idActive;
            }
            else workspace.active = false;
        });
        var workspaces = [];
        workspaces = [...workspaces, ...response];
        commit("SET_WORKSPACES", workspaces);
    },
    async setWorkspaceColor({commit}, workspaceData){
        await this.$axios.$patch('api/projects/'+workspaceData.id, {color: workspaceData.color});
        commit("SET_WORKSPACE_COLOR", workspaceData);
    },
    setEditName({commit}, workspaceData){
        commit("SET_EDIT_NAME", workspaceData);
    },
    async setName({commit}, workspaceData){
        await this.$axios.$patch('api/projects/'+workspaceData.id, {title: workspaceData.title});
        commit("SET_NAME", workspaceData);
    },
    async addWorkspace({commit}, editTitle = true){
        const response = await this.$axios.$post('api/projects', {title: 'Blank', color: '#000000', description: 'blank'});
        const workspace = {...response.data, ...{editTitle: editTitle, active: false}};
        commit("ADD_WORKSPACE", workspace);
        return response.data.id;
    },
    async deleteWorkspace({commit}, id){
        const response = await this.$axios.$delete("api/projects/"+id);
        commit("DELETE_WORKSPACE", id);
    }
}