<template>
    <li class="workspace-menu-list__item" :class="{active: isActive, hovered: isPopupShowed}">
        <div class="workspace-menu-list__item-circle" :style="{backgroundColor: workspaceColor}"></div>
        <!--<div class="workspace-menu-list__item-title">{{ workspaceName }}</div>-->
        <div class="workspace-menu-list__item-title">
            <transition name="title" @after-enter="focusInput" mode="out-in">
                <input v-if="editTitle" type="text" v-model.trim="workspaceName" class="item-input" @keyup.enter="closeEditInput" v-click-outside="closeEditInput" key="edit" autofocus>
                <span v-else key="title">{{ workspaceName }}</span>
            </transition>
        </div>
        <div class="workspace-menu-list__item-dots" :class="{hovered: isPopupShowed}" @click="openWorkspacePopup" v-click-outside="closeWorkspacePopup">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33332 8.66666C3.70151 8.66666 3.99999 8.36818 3.99999 7.99999C3.99999 7.6318 3.70151 7.33333 3.33332 7.33333C2.96513 7.33333 2.66666 7.6318 2.66666 7.99999C2.66666 8.36818 2.96513 8.66666 3.33332 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99998 8.66666C8.36817 8.66666 8.66665 8.36818 8.66665 7.99999C8.66665 7.6318 8.36817 7.33333 7.99998 7.33333C7.63179 7.33333 7.33331 7.6318 7.33331 7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.6318 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.6318 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <transition name="workspace-popup-fade">
                <div class="workspace-popup" v-show="isPopupShowed">
                    <div class="workspace-popup__wrapper">
                        <ul class="workspace-popup__list">
                            <li class="workspace-popup__item" @click="openEditInput">
                                Изменить название
                            </li>
                            <li class="workspace-popup__item" @click="openWorkspaceColorPicker" v-click-outside="closeWorkspaceColorPicker">
                                Изменить цвет
                                <client-only>
                                    <transition name="workspace-color-picker-fade">
                                        <div class="workspace__color-picker" v-show="isColorPickerShowed">
                                            <color-picker v-model="colorPicker" :width="rem * 10" :height="rem * 10"></color-picker>
                                            <div class="color-picker__selected-color">
                                                <span class="selected-color__title">Выбранный цвет:</span>
                                                <div class="selected-color__preview">
                                                    <span class="selected-color__preview-block" :style="{backgroundColor: colorPicker}"></span>
                                                    <span class="selected-color__preview-title">{{ colorPicker }}</span>
                                                </div>
                                            </div>
                                            <div class="color-picker-buttons">
                                                <div class="color-picker__btn color-picker__save-btn" @click.stop="saveColor">
                                                    Ок
                                                </div>
                                                <div class="color-picker__btn color-picker__cancel-btn" @click.stop="closeWorkspaceColorPicker">
                                                    Отмена
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </client-only>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </li>
</template>

<script>
    import ColorPicker from 'vue-color-picker-wheel';
    export default {
        components: {
            ColorPicker
        },
        props: {
            name: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: "#000000"
            }
        },
        computed:{
            rem: function(){
                return process.client ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 0;
            }
        },
        data(){
            return {
                isActive: this.active,
                workspaceColor: this.color,
                isPopupShowed: false,
                isColorPickerShowed: false,
                colorPicker: this.color,
                editTitle: false,
                workspaceName: this.name,
                tweenName: ''
            }
        },
        directives: {
            'click-outside' : {
                bind: function (el, binding, vnode) {
                    el.clickOutsideEvent = function (event) {
                        if (!(el == event.target || el.contains(event.target))) {
                            vnode.context[binding.expression](event);
                        }
                    };
                    document.body.addEventListener('click', el.clickOutsideEvent)
                },
                unbind: function (el) {
                    document.body.removeEventListener('click', el.clickOutsideEvent)
                },
            },

        },
        methods: {
            closeWorkspacePopup(){ 
                this.isPopupShowed = false;
            },
            openWorkspacePopup(event) {
                $(this.$el).find('.workspace-popup').css('display', 'flex');
                this.isPopupShowed = true;
                this.adjustPopupPosition($(this.$el).find('.workspace-popup'));
            },
            closeWorkspaceColorPicker(){
                this.isColorPickerShowed = false;
                this.colorPicker = this.workspaceColor;
            },
            openWorkspaceColorPicker(){
                $(this.$el).find('.workspace__color-picker').css('display', 'flex');
                this.isColorPickerShowed = true;
                this.adjustPopupPosition($(this.$el).find('.workspace__color-picker'), '-0.0625rem', parseFloat($(this.$el).find('.workspace-popup')[0].style.top));
            },
            adjustPopupPosition(el, defVal = 0, dep = 0) {
                // элемент - el
                // дефолтное значение смещения - defVal
                // смещение родительского элемента
                const windowHeight = window.innerHeight;
                const popupHeight = el[0].clientHeight;
                const popupTop = parseInt(this.$el.offsetTop);
                el[0].style.top = defVal;

                // Если попап касается нижнего края экрана, поднимаем его вверх
                
                if (popupTop + popupHeight > windowHeight) {
                    const newTop = popupHeight + popupTop - windowHeight + dep;
                    el[0].style.top = `-${newTop}px`;
                }
            },
            saveColor(){
                this.workspaceColor = this.colorPicker;
                this.closeWorkspaceColorPicker();
            },
            openEditInput(){
                this.editTitle = true;
                this.tweenName = this.workspaceName;
            },
            closeEditInput(){
                this.editTitle = false;
                if(this.workspaceName === ''){
                    this.workspaceName = this.tweenName;
                }
            },
            focusInput(el){
                const value = el.value;
                el.focus();
                el.value = '';
                el.value = value;
                this.isPopupShowed = false;
            }
        },
        created(){
            if(this.workspaceName === ''){
                this.workspaceName = 'Blank';
                this.openEditInput();
            }
        },
        mounted(){
            window.addEventListener('resize', $.proxy(function(){
                this.adjustPopupPosition($(this.$el).find('.workspace-popup'));
                this.adjustPopupPosition($(this.$el).find('.workspace__color-picker'), '-0.0625rem', parseFloat($(this.$el).find('.workspace-popup')[0].style.top));
            }, this));
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
        position: relative;
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

    .workspace-popup-fade-enter-active, .workspace-popup-fade-leave-active{
        transition: opacity 0.1s;
    }
    
    .workspace-popup-fade-enter, .workspace-popup-fade-leave-to{
        opacity: 0;
    }

    .workspace-color-picker-fade-enter-active, .workspace-color-picker-fade-leave-active{
        transition: opacity 0.1s;
    }
    
    .workspace-color-picker-fade-enter, .workspace-color-picker-fade-leave-to{
        opacity: 0;
    }

    .title-enter-active, .title-leave-active{
        transition: opacity 0.1s;
    }
    
    .title-enter, .title-leave-to{
        opacity: 0;
    }

    .workspace__color-picker{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -0.0625rem;
        right: -12rem;
        z-index: 2;
        width: 12rem;
        background: white;
        border-radius: 0.25rem;
        border: 0.0625rem solid #EEF2F6;
        box-sizing: border-box;
        padding: 1rem;
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        cursor: default;
    }

    .color-picker__selected-color{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
        font-weight: 700;
    }

    .selected-color__preview{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    .selected-color__preview-block{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 1rem;
    }

    .color-picker-buttons{
        margin-top: 0.75rem;
        display: flex;
        justify-content: space-around;
        font-size: 0.875rem;
    }

    .color-picker__btn{
        display: flex;
        align-items: center;
        height: 2rem;
        padding: 0 1rem;
    }

    .color-picker__btn:hover{
        cursor: pointer;
    }

    .color-picker__save-btn{
        text-transform: uppercase;
        color: white;
        background-color: #306BFF;
        border-radius: 0.5rem;
    }

    .color-picker__cancel-btn{
        color: #94A3B8;
    }
</style>