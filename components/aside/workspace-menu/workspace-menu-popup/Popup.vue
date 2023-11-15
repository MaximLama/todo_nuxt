<template>
    <transition v-on:enter="adjustPopupPosition">
        <div class="workspace-popup" v-show="isPopupOpen" :style="{top: top+'rem'}" v-click-outside="closePopup">
            <div class="workspace-popup__wrapper">
                <ul class="workspace-popup__list">
                    <li class="workspace-popup__item" @click="openEditInput">
                        Изменить название
                    </li>
                    <li class="workspace-popup__item" @click.stop="openWorkspaceColorPicker" :class="{hovered: isColorPickerShowed}">
                        Изменить цвет
                    </li>
                </ul>
                <WorkspaceColor />
            </div>
        </div>
    </transition>
</template>

<script>
    import WorkspaceColor from './WorkspaceColor.vue';
    import {mapGetters, mapActions} from 'vuex';
    export default {
        components:{
            WorkspaceColor
        },
        computed:{ 
            ...mapGetters({
                isPopupOpen: 'workspace/workspace-menu-popup/isPopupOpen',
                top: 'workspace/workspace-menu-popup/top',
                baseTop: 'workspace/workspace-menu-popup/baseTop',
                id: 'workspace/workspace-menu-popup/id',
                color: 'workspace/workspace-menu/color',
                isColorPickerShowed: 'workspace/workspace-menu-colorpicker/isPopupOpen'
            })
        },
        methods:{
            closePopup(){
                this.setIsPopupOpen(false);
            },
            openEditInput(){
                this.setEditName({id: this.id, editTitle:true});
            }, 
            openWorkspaceColorPicker(){
                if(this.isColorPickerShowed) return;
                this.openColorPicker({
                    isPopupOpen: true,
                    top: '0',
                    color: this.color(this.id)
                });
            },
            adjustPopupPosition() {
                const windowHeight = window.innerHeight;
                const popupHeight = this.$el.clientHeight;
                const popupTop = this.top;
                if (popupTop*this.rem + popupHeight > windowHeight || popupTop < this.baseTop) {
                    this.setTop((windowHeight - popupHeight)/this.rem);
                }
            },
            ...mapActions({
                setTop:"workspace/workspace-menu-popup/setTop",
                setIsPopupOpen: "workspace/workspace-menu-popup/setIsPopupOpen",
                openColorPicker: "workspace/workspace-menu-colorpicker/setPopupData",
                setEditName: "workspace/workspace-menu/setEditName"
            })
        },
        mounted(){
            window.addEventListener('resize', $.proxy(function(){
                if(!this.isPopupOpen) return;
                this.adjustPopupPosition();
            }, this));
        }
    }
</script>

<style scoped>
    .workspace-popup {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 14rem;
        top: 0;
        right: -14rem;
        z-index: 2;
        background: white;
        border-radius: 0.25rem;
        border: 0.0625rem solid #EEF2F6;
        box-sizing: border-box;
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        cursor: default;
    }

    .workspace-popup__wrapper{
        position: relative;
        padding: 1rem;
    }

    .workspace-popup__item {
        display: flex;
        align-items: center;
        height: 2.5rem;
        margin-bottom: 0.15rem;
        font-weight: 500;
        color: #1E293B;
        padding: 0 0.75rem;
    }

    .workspace-popup__item:last-of-type {
        margin-bottom: 0;
    }

    .workspace-popup__item:hover {
        background: #F8FAFC;
        cursor: pointer;
    }

    .workspace-popup__item.hovered {
        background: #F8FAFC;
    }
</style>