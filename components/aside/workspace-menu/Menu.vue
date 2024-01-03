<template>
    <div class="workspace-menu">
        <div class="workspace-menu-title__wrapper">
            <span class="workspace-menu-title">Workspace</span>
            <div class="workspace-menu__add-btn-wrapper" @click.stop="createWorkspace">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00002 5.55155V10.4358" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.4445 7.99365H5.55557" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1238 1.33334H4.8762C2.69842 1.33334 1.33334 2.87473 1.33334 5.05677V10.9432C1.33334 13.1253 2.69207 14.6667 4.8762 14.6667H11.1238C13.3079 14.6667 14.6667 13.1253 14.6667 10.9432V5.05677C14.6667 2.87473 13.3079 1.33334 11.1238 1.33334Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <ul class="workspace-menu-list">
            <MenuItem 
                v-for="workspace in workspaces" 
                :key="workspace.id"
                :workspace="workspace" 
            />
        </ul>
        <Popup />
        <DeleteWorkspaceModal />
    </div>
</template>

<script>
    import MenuItem from './MenuItem.vue';
    import Popup from './workspace-menu-popup/Popup.vue';
    import DeleteWorkspaceModal from '~/components/DeleteWorkspaceModal.vue';
    import {mapGetters, mapActions} from 'vuex';
    export default {
        components: {
            MenuItem, Popup, DeleteWorkspaceModal
        },
        computed: {
            ...mapGetters({
                workspaces: 'workspace/workspace-menu/workspaces'
            })
        },
        methods:{
            createWorkspace(){
                this.addWorkspace();
            },
            ...mapActions({
                loadWorkspaces: 'workspace/workspace-menu/setWorkspaces',
                addWorkspace: 'workspace/workspace-menu/addWorkspace'
            })
        },
        created(){
            this.loadWorkspaces(this.$route.params.id);
        }
    }
</script>

<style scoped>
    .workspace-menu{
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 1.5rem 0.75rem 2rem 0.75rem;
        max-height: 100%;
        min-height: 2.5rem;
        overflow-y: hidden;
        margin-bottom: 1rem;
    }

    .workspace-menu-title__wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.25rem 1rem 0.75rem;
        height: 1.5rem;
    }

    .workspace-menu-title{
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.0625rem;
    }

    .workspace-menu__add-btn-wrapper{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    .workspace-menu__add-btn-wrapper:hover {
        background: #F8FAFC;
        cursor: pointer;
    }

    .workspace-menu-list{
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>