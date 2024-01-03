<template>
    <div>
        <div class="overlay" v-if="showModal"></div>
        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <div class="close" @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88906 10L5 6.11094L1.11094 10L0 8.88906L3.88906 5L0 1.11094L1.11094 0L5 3.88906Z" fill="#4F4F4F"/>
                    </svg>
                </div>
                <div class="warning">
                    <div class="warning-icon__wrapper">
                        <div class="warning-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#D92D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="warning-text__wrapper">
                        <div class="warning-text__title">
                            Удалить проект
                        </div>
                        <div class="warning-text__subtitle">
                            Вы уверены что хотите удалить проект? Это действие нельзя будет потом отменить.
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <div class="btn cancel" @click="closeModal">
                        <div class="btn-title">Отмена</div>
                    </div>
                    <div class="btn confirm" @click="deleteWorkspace">
                        <div class="btn-title">Удалить</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                showModal: 'delete-workspace-modal/showModal',
                id: 'delete-workspace-modal/id'
            })
        },
        methods: {
            closeModal() {
                this.hideModal();
                this.enableBodyScroll(); // Разрешить прокрутку body
            },
            disableBodyScroll() {
                document.body.style.overflow = 'hidden';
            },
            enableBodyScroll() {
                document.body.style.overflow = '';
            },
            async deleteWorkspace(){
                await this.delWorkspace(this.id);
                this.closeModal();
            },
            ...mapMutations({
                hideModal: "delete-workspace-modal/HIDE_MODAL"
            }),
            ...mapActions({
                delWorkspace: "workspace/workspace-menu/deleteWorkspace"
            })
        },
        watch: {
            showModal(newValue){
                if(newValue){
                    this.disableBodyScroll();
                }
            }
        }
    }
</script>

<style scoped>
    .overlay {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }

    .modal {
        display: inline-flex;
        position: fixed;
        z-index: 11;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 0.5rem;
        border: 2px solid #DEE2E6;
    }

    .modal-content{
        display: flex;
        flex-direction: column;
        padding: 2.25rem 2.5rem;
        position: relative;
    }

    .close {
        display: flex;
        position: absolute;
        box-sizing: border-box;
        top: 0.62rem;
        right: 0.62rem;
        width: 1.5rem;
        height: 1.5rem;
        padding: 0.25rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        border-radius: 1.8125rem;
        background: #E5E5E5;
    }

    .close svg{
        width: 0.625rem;
        height: 0.625rem;
        flex-shrink: 0;
    }

    .warning{
        display: flex;
    }

    .warning-icon__wrapper{
        display: flex;
        margin-right: 1rem;
    }

    .warning-icon{
        display: flex;
        width: 3rem;
        height: 3rem;
        padding: 0.75rem;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-radius: 1.75rem;
        border: 8px solid #FEF3F2;
        background: #FEE4E2;
    }

    .warning-icon svg{
        width: 1.5rem;
        height: 1.5rem;
        flex-shrink: 0;
    }

    .warning-text__wrapper{
        display: flex;
        flex-direction: column;
    }

    .warning-text__title{
        color: #1E293B;
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
        line-height: 1.25rem;
    }

    .warning-text__subtitle{
        line-height: 1.25rem;
    }

    .btns{
        display: flex;
        gap: 1.5rem;
    }

    .btn{
        display: flex;
        box-sizing: border-box;
        height: 2.75rem;
        padding: 0.875rem 1.25rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        flex: 1 0 0;
        border-radius: 0.5rem;
        margin-top: 1rem;
        cursor: pointer;
    }

    .btn-title{
        font-size: 0.875rem;
        font-weight: 500;
    }

    .btn.cancel{
        border: 1px solid #4F4F4F;
    }

    .btn.confirm{
        background: #D92D20;
    }

    .btn.confirm .btn-title{
        color:white;
    }
</style>