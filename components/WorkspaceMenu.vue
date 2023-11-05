<template>
    <div class="workspace-menu">
        <div class="workspace-menu-title__wrapper">
            <span class="workspace-menu-title">Workspace</span>
            <div class="workspace-menu__add-btn-wrapper" @click="createWorkspace">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00002 5.55155V10.4358" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.4445 7.99365H5.55557" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1238 1.33334H4.8762C2.69842 1.33334 1.33334 2.87473 1.33334 5.05677V10.9432C1.33334 13.1253 2.69207 14.6667 4.8762 14.6667H11.1238C13.3079 14.6667 14.6667 13.1253 14.6667 10.9432V5.05677C14.6667 2.87473 13.3079 1.33334 11.1238 1.33334Z" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <ul class="workspace-menu-list">
            <WorkspaceMenuItem :name="'Hikoko Design'" :active="true" :color="'#FFB580'" editTitle="true"/>
            <WorkspaceMenuItem :name="'Website Design'" :active="false" :color="'#306BFF'"/>
            <WorkspaceMenuItem 
                v-for="workspace in workspaces" 
                :key="workspace.id" 
                :name="workspace.title" 
                :active="false"
                :color="workspace.project_color"
            />
            <!--<li class="workspace-menu-list__item active">
                <div class="workspace-menu-list__item-circle orange"></div>
                <p class="workspace-menu-list__item-title">Hikoko Design</p>
                <div class="workspace-menu-list__item-dots" @click.stop="openWorkspacePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33332 8.66666C3.70151 8.66666 3.99999 8.36818 3.99999 7.99999C3.99999 7.6318 3.70151 7.33333 3.33332 7.33333C2.96513 7.33333 2.66666 7.6318 2.66666 7.99999C2.66666 8.36818 2.96513 8.66666 3.33332 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.99998 8.66666C8.36817 8.66666 8.66665 8.36818 8.66665 7.99999C8.66665 7.6318 8.36817 7.33333 7.99998 7.33333C7.63179 7.33333 7.33331 7.6318 7.33331 7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.6318 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.6318 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="workspace-popup none">
                    <ul class="workspace-popup__list">
                        <li class="workspace-popup__item">
                            Изменить название
                        </li>
                        <li class="workspace-popup__item">
                            Изменить цвет
                        </li>
                    </ul>
                </div>
            </li>
            <li class="workspace-menu-list__item">
                <div class="workspace-menu-list__item-circle blue"></div>
                <p class="workspace-menu-list__item-title">Website Design</p>
                <div class="workspace-menu-list__item-dots" @click.prevent="openWorkspacePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33332 8.66666C3.70151 8.66666 3.99999 8.36818 3.99999 7.99999C3.99999 7.6318 3.70151 7.33333 3.33332 7.33333C2.96513 7.33333 2.66666 7.6318 2.66666 7.99999C2.66666 8.36818 2.96513 8.66666 3.33332 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.99998 8.66666C8.36817 8.66666 8.66665 8.36818 8.66665 7.99999C8.66665 7.6318 8.36817 7.33333 7.99998 7.33333C7.63179 7.33333 7.33331 7.6318 7.33331 7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.6318 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.6318 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="workspace-popup none">
                    <ul class="workspace-popup__list">
                        <li class="workspace-popup__item">
                            Изменить название
                        </li>
                        <li class="workspace-popup__item">
                            Изменить цвет
                        </li>
                    </ul>
                </div>
            </li>-->
            <!--<li class="workspace-menu-list__item">
                <div class="workspace-menu-list__item-circle green"></div>
                <p class="workspace-menu-list__item-title">Mobile Design</p>
                <div class="workspace-menu-list__item-dots" @click.prevent="openWorkspacePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33332 8.66666C3.70151 8.66666 3.99999 8.36818 3.99999 7.99999C3.99999 7.6318 3.70151 7.33333 3.33332 7.33333C2.96513 7.33333 2.66666 7.6318 2.66666 7.99999C2.66666 8.36818 2.96513 8.66666 3.33332 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.99998 8.66666C8.36817 8.66666 8.66665 8.36818 8.66665 7.99999C8.66665 7.6318 8.36817 7.33333 7.99998 7.33333C7.63179 7.33333 7.33331 7.6318 7.33331 7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.6318 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.6318 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="workspace-popup none">
                    <ul class="workspace-popup__list">
                        <li class="workspace-popup__item">
                            Изменить название
                        </li>
                        <li class="workspace-popup__item">
                            Изменить цвет
                        </li>
                    </ul>
                </div>
            </li>
            <li class="workspace-menu-list__item ">
                <div class="workspace-menu-list__item-circle purple"></div>
                <p class="workspace-menu-list__item-title">Blank</p>
                <div class="workspace-menu-list__item-dots" @click.prevent="openWorkspacePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33332 8.66666C3.70151 8.66666 3.99999 8.36818 3.99999 7.99999C3.99999 7.6318 3.70151 7.33333 3.33332 7.33333C2.96513 7.33333 2.66666 7.6318 2.66666 7.99999C2.66666 8.36818 2.96513 8.66666 3.33332 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.99998 8.66666C8.36817 8.66666 8.66665 8.36818 8.66665 7.99999C8.66665 7.6318 8.36817 7.33333 7.99998 7.33333C7.63179 7.33333 7.33331 7.6318 7.33331 7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.6318 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.6318 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="workspace-popup none">
                    <ul class="workspace-popup__list">
                        <li class="workspace-popup__item">
                            Изменить название
                        </li>
                        <li class="workspace-popup__item">
                            Изменить цвет
                        </li>
                    </ul>
                </div>
            </li>-->
        </ul>
    </div>
</template>

<script>
    import WorkspaceMenuItem from './WorkspaceMenuItem.vue';
    export default {
        components: {
            WorkspaceMenuItem
        },
        data(){
            return {
                workspaces: []
            }
        },
        methods:{
            createWorkspace(){
                this.workspaces.push({
                    id: 3
                });
            }
        }
        /*methods: {
            async openWorkspacePopup(event) {
                const workspace = $(event.target).hasClass("workspace-menu-list__item-dots") ? $(event.target): $(event.target).closest(".workspace-menu-list__item-dots");
                const popup = workspace.closest(".workspace-menu-list__item").find(".workspace-popup");
                console.log($(popup));
                if($(popup).hasClass("none")){
                    $(popup).removeClass("none").fadeTo(100, 1);
                    $(document).not($(popup)).click(function(){
                        $(popup).fadeTo(100, 0).addClass('none');
                    });
                }
                else{
                    $(popup).fadeTo(100, 0).addClass('none');
                }
            }
        }*/
    }
</script>

<style scoped>
    .workspace-menu{
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 1.5rem 0.75rem 2rem 0.75rem;
        max-height: 100%;
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