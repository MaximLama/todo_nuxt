<template>
    <main>
        <div class="title-wrapper">
            <div class="title">
                <h1>Ваши проекты</h1>
            </div>
            <div v-if="isDataLoaded && workspaces.length" class="new-workspace-btn__wrapper" @click="showAddWorkspaceModal">
                <div class="new-workspace-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00002 5.55157V10.4358" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.4445 7.99367H5.55557" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1238 1.33334H4.8762C2.69842 1.33334 1.33334 2.87473 1.33334 5.05678V10.9432C1.33334 13.1253 2.69207 14.6667 4.8762 14.6667H11.1238C13.3079 14.6667 14.6667 13.1253 14.6667 10.9432V5.05678C14.6667 2.87473 13.3079 1.33334 11.1238 1.33334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="new-workspace-title">Добавить проект</div>
            </div>
        </div>
        <div class="container container-main">
            <div v-if="isDataLoaded">
                <Workspaces v-if="workspaces.length" :workspaces="workspaces"/>
                <EmptyDashboard v-else/>
                <AddWorkspaceModal />
                <EditWorkspaceModal />
            </div>
        </div>
    </main>
</template>

<script>
    import AddWorkspaceModal from './AddWorkspaceModal.vue';
    import EmptyDashboard from './EmptyDashboard.vue';
    import Workspaces from './Workspaces.vue';
    import EditWorkspaceModal from './EditWorkspaceModal.vue';
    import {mapGetters, mapActions, mapMutations} from 'vuex';
    export default {
        data(){
            return {
                isDataLoaded: false
            }
        },
        computed: {
            ...mapGetters({
                workspaces: 'workspace/workspace-menu/workspaces'
            })
        },
        methods: {
            ...mapActions({
                loadWorkspaces: 'workspace/workspace-menu/setWorkspaces',
            }),
            ...mapMutations({
                showAddWorkspaceModal: 'add-workspace-modal/SHOW'
            })
        },
        async created() {
            await this.loadWorkspaces();
            this.isDataLoaded = true;
            
        },
        components: { EmptyDashboard, Workspaces, AddWorkspaceModal, EditWorkspaceModal}
    }
</script>

<style scoped>
    main{
        padding: 3rem;
        margin-left: 15.625rem;
        height: 100vh;
        box-sizing: border-box;
        padding-top: 8.5rem;
        transition: all 0.3s;
    }

    .title-wrapper{
        display: flex;
        justify-content: space-between;
    }

    .title{
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }

    .title h1{
        color: #1E293B;
        font-size: 2.5rem;
        font-weight: 700;
    }

    .container{
        display: flex;
        flex-direction: column;
    }

    .container-main{
        margin-top: 0.5rem;
    }

    .new-workspace-btn__wrapper{
        display: flex;
        align-items: center;
        padding: 0 1.38rem;
        border-radius: 62.5rem;
        background: #306BFF;
        min-height: 3rem;
        height: 3rem;
        box-sizing: border-box;
        margin: auto 0;
    }

    .new-workspace-btn__wrapper:hover{
        cursor: pointer;
    }    

    .new-workspace-icon{
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
    }

    .new-workspace-title{
        color: white;
        font-size: 0.875rem;
        font-weight: 700;
    }

    @media (max-width: 1023px){
        
        main{
            margin-left: 0;
        }
    }
</style>