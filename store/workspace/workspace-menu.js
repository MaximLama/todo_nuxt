export const state = () => ({
    workspaces: []
});

export const getters = {
    workspaces(state){
        return state.workspaces;
    },
    color: (state) => (id) => {
        const workspaces = state.workspaces.filter( workspace => workspace.id == id);
        return workspaces.length ? workspaces[0].project_color : null;   
    }
};

export const mutations = {
    SET_WORKSPACES(state, workspaces){
        state.workspaces = workspaces
    },
    SET_WORKSPACE_COLOR(state, workspaceData){
        state.workspaces.filter( workspace => workspace.id == workspaceData.id)[0].project_color = workspaceData.color;
    },
    SET_EDIT_NAME(state, workspaceData){
        state.workspaces.filter( workspace => workspace.id == workspaceData.id)[0].editTitle = workspaceData.editTitle;
    },
    SET_NAME(state, workspaceData){
        state.workspaces.filter( workspace => workspace.id == workspaceData.id)[0].title = workspaceData.title;
    },
    ADD_WORKSPACE(state, workspace){
        state.workspaces.push(workspace);
    }
}

export const actions = {
    async setWorkspaces({commit}, idActive){
        /*if(workspaces.length){
            workspaces.forEach(workspace => {
                workspace.editTitle = false;
            });
        }*/
        const response = await this.$axios.$get('api/projects');
        response.forEach(workspace => {
            workspace.editTitle = false;
            if(workspace.id == idActive)
                workspace.active = true;
            else workspace.active = false;
        });
        var workspaces = [];
        workspaces = [...workspaces, ...response];
        commit("SET_WORKSPACES", workspaces);
    },
    async setWorkspaceColor({commit}, workspaceData){
        await this.$axios.$patch('api/projects/'+workspaceData.id, {project_color: workspaceData.color});
        commit("SET_WORKSPACE_COLOR", workspaceData);
    },
    setEditName({commit}, workspaceData){
        commit("SET_EDIT_NAME", workspaceData);
    },
    async setName({commit}, workspaceData){
        await this.$axios.$patch('api/projects/'+workspaceData.id, {title: workspaceData.title});
        commit("SET_NAME", workspaceData);
    },
    async addWorkspace({commit}){
        const response = await this.$axios.$post('api/projects', {title: 'Blank', project_color: '#000000', description: 'blank'});
        const workspace = {...response, ...{editTitle: true, active: false}};
        commit("ADD_WORKSPACE", workspace);
    }
}