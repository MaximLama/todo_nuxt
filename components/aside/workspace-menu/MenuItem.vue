<template>
    <li class="workspace-menu-list__item" :class="{active: workspace.active, hovered: isPopupShowed}">
        <div class="workspace-menu-list__item-circle" :style="{backgroundColor: workspace.project_color}"></div>
        <nuxt-link :to="'/workspaces/'+workspace.id" class="workspace-menu-list__item-title">
            <transition name="title" mode="out-in">
                <input v-if="isSetEditTitle" type="text" v-model.trim="name" class="item-input" @keyup.enter="closeEditInput" v-click-outside="closeEditInput" key="edit" v-focus>
                <span v-else key="title">{{ name }}</span>
            </transition>
        </nuxt-link>
        <div class="workspace-menu-list__item-dots" :class="{hovered: isPopupShowed}" @click.stop="openWorkspacePopup">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33332 8.66666C3.70151 8.66666 3.99999 8.36818 3.99999 7.99999C3.99999 7.6318 3.70151 7.33333 3.33332 7.33333C2.96513 7.33333 2.66666 7.6318 2.66666 7.99999C2.66666 8.36818 2.96513 8.66666 3.33332 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99998 8.66666C8.36817 8.66666 8.66665 8.36818 8.66665 7.99999C8.66665 7.6318 8.36817 7.33333 7.99998 7.33333C7.63179 7.33333 7.33331 7.6318 7.33331 7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.6318 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.6318 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </li>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        props: {
            workspace: {
                type: Object,
                default: {
                    title: 'Blank',
                    active: 'false',
                    project_color: '#000000',
                    editTitle: false
                }
            },
        },
        data(){
            return {
                name: this.workspace.title,
                tweenName: ''
            }
        },
        computed: {
            ...mapGetters({
                popupId: 'workspace/workspace-menu-popup/id',
                isPopupOpen: 'workspace/workspace-menu-popup/isPopupOpen'
            }),
            isPopupShowed: function(){
                return (this.popupId == this.workspace.id) && this.isPopupOpen;
            },
            isSetEditTitle: function(){
                return this.workspace.editTitle;
            }
        },
        methods: {
            openWorkspacePopup(event) {
                if(this.isPopupShowed) return;
                const top = this.$el.getBoundingClientRect().top / this.rem;
                this.setPopupData({isPopupOpen:true, top:top, id:this.workspace.id});
            },
            closeEditInput(){
                this.setEditName({id: this.workspace.id, editTitle: false});
                if(this.name === ''){
                    this.name = this.tweenName;
                }
                this.setName({id: this.workspace.id, title: this.name});
            },
            ...mapActions({
                setPopupData: "workspace/workspace-menu-popup/setPopupData",
                setName: "workspace/workspace-menu/setName",
                setEditName: "workspace/workspace-menu/setEditName" 
            })
        },
        watch:{
            isSetEditTitle: function(val){
                if(val){
                    this.tweenName = this.name;
                }
            }
        }
    }
</script>

<style scoped>
    .workspace-menu-list__item{
        display: flex;
        align-items: center;
        height: 2.5rem;
        min-height: 2.5rem;
        margin-bottom: 0.5rem;
        box-sizing: border-box;
        padding: 0 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .workspace-menu-list__item.active{
        background: #F8FAFC;
    }

    .workspace-menu-list__item-circle{
        min-width: 0.5rem;
        min-height: 0.5rem;
        max-width: 0.5rem;
        max-height: 0.5rem;
        background-color: black;
        border-radius: 50%;
        margin-right: 1rem;
        flex-shrink: 0;
    }

    .workspace-menu-list__item-title{
        color: #1E293B;
        font-weight: 500;
    }

    .workspace-menu-list__item.active .workspace-menu-list__item-title{
        font-weight: 700;
    }

    .item-input{
        border: 0.0625rem solid #1E293B;
        border-radius: 0.3rem;
    }

    .workspace-menu-list__item-dots{
        display: none;
        align-items: center;
        margin-left: auto;
        padding: 0.25rem;
    }

    .workspace-menu-list__item-dots.hovered{
       display: flex; 
    }

    .workspace-menu-list__item-dots svg{
        display: flex;
    }

    .workspace-menu-list__item.active .workspace-menu-list__item-dots{
        display: flex;
    }

    .workspace-menu-list__item:not(.active):hover {
        background: #F8FAFC;
    }

    .workspace-menu-list__item.hovered:not(.active) {
        background: #F8FAFC;
    }

    .workspace-menu-list__item:not(.active):hover .workspace-menu-list__item-dots{
        display: flex;
    }

    .title-enter-active, .title-leave-active{
        transition: opacity 0.1s;
    }
    
    .title-enter, .title-leave-to{
        opacity: 0;
    }
</style>