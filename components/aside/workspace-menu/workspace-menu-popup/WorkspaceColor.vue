<template>
    <client-only>
        <transition v-on:enter="adjustPopupPosition">
            <div class="workspace__color-picker" v-show="isPopupOpen" :style="{top: top+'rem'}" v-click-outside="closePopup">
                <color-picker v-model="color" :width="rem * 10" :height="rem * 10"></color-picker>
                <div class="color-picker__selected-color">
                    <span class="selected-color__title">Выбранный цвет:</span>
                    <div class="selected-color__preview">
                        <span class="selected-color__preview-block" :style="{backgroundColor: color}"></span>
                        <span class="selected-color__preview-title">{{ color }}</span>
                    </div>
                </div>
                <div class="color-picker-buttons">
                    <div class="color-picker__btn color-picker__save-btn" @click.stop="saveColor">
                        Ок
                    </div>
                    <div class="color-picker__btn color-picker__cancel-btn" @click.stop="closePopup">
                        Отмена
                    </div>
                </div>
            </div>
        </transition>
    </client-only>
</template>

<script>
    import ColorPicker from 'vue-color-picker-wheel';
    import {mapGetters, mapActions} from 'vuex';
    export default {
        components: {
            ColorPicker
        },
        computed: {
            ...mapGetters({
                isPopupOpen: 'workspace/workspace-menu-colorpicker/isPopupOpen',
                colorState: 'workspace/workspace-menu-colorpicker/color',
                idWorkspace: 'workspace/workspace-menu-popup/id',
                top: 'workspace/workspace-menu-colorpicker/top',
                baseTop: 'workspace/workspace-menu-popup/baseTop',
                popupTop: 'workspace/workspace-menu-popup/top'
            }),
            color:{
                get: function(){
                    return this.colorState;
                },
                set: function(color){
                    this.updateColor(color);
                }
            }
        },
        methods: {
            saveColor(){
                this.saveColorState({id: this.idWorkspace, color: this.color});
                this.closePopup();
            },
            adjustPopupPosition() {
                const windowHeight = window.innerHeight;
                const colorPopupHeight = this.$el.clientHeight;
                const popupTop = this.popupTop;
                const colorPopupTop = this.top;
                if ((popupTop+colorPopupTop)*this.rem + colorPopupHeight > windowHeight || colorPopupTop < 0) {
                    this.setTop((windowHeight - colorPopupHeight)/this.rem - popupTop);
                }
            },
            closePopup(){
                this.setIsPopupOpen(false);
            },
            ...mapActions({
                updateColor: 'workspace/workspace-menu-colorpicker/setColor',
                saveColorState: 'workspace/workspace-menu/setWorkspaceColor',
                setTop: 'workspace/workspace-menu-colorpicker/setTop',
                setIsPopupOpen: 'workspace/workspace-menu-colorpicker/setIsPopupOpen'
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

    .selected-color__title{
        color: #1E293B;
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

    .selected-color__preview-title{
        color: #1E293B;
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