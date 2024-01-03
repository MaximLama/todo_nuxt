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
                <div class="title">Создать новый проект</div>
                <form class="workspace-name">
                    <div class="workspace-name__wrapper">
                        <input v-model.trim="form.name" class="workspace-name__input" type="text" id="name" maxlength="50" required>
                        <label for="name" class="workspace-name__label">Название проекта</label>
                    </div>
                    <p class="input-error" v-if="modalErrors.name">{{ modalErrors.name }}</p>
                    <div class="btns">
                        <div class="btn confirm" @click="createWorkspace">
                            <div class="btn-title">Создать</div>
                        </div>
                        <div class="btn cancel" @click="closeModal">
                            <div class="btn-title">Отмена</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex';
    export default {
        data(){
            return {
                form: {
                    name: ''
                },
                modalErrors: {
                    name: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                showModal: 'add-workspace-modal/showModal'
            })
        },
        methods: {
            closeModal() {
                this.form.name = '';
                this.hide();
                this.enableBodyScroll(); // Разрешить прокрутку body
            },
            disableBodyScroll() {
                document.body.style.overflow = 'hidden';
            },
            enableBodyScroll() {
                document.body.style.overflow = '';
            },
            async createWorkspace(){
                if(!(this.form.name.length > 0 && this.form.name.length <= 50)){
                    this.modalErrors.name = "Название не должно быть и содержать не более 50 символов";
                    return;
                }
                let id = await this.addWorkspace(false);
                
                if(id){
                    await this.setWorkspaceName({id:id, title:this.form.name});
                }
                this.closeModal();
            },
            ...mapActions({
                addWorkspace: "workspace/workspace-menu/addWorkspace",
                setWorkspaceName: "workspace/workspace-menu/setName"
            }),
            ...mapMutations({
                hide: "add-workspace-modal/HIDE",
            })
        },
        watch:{
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
        align-items: center;
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

    .title{
        color: #1E293B;
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }

    .workspace-name{
        display: flex;
        flex-direction: column;
    }

    .workspace-name__wrapper{
        display: flex;
        flex-direction: column;
        background: #F8FAFC;
        margin-top: 0.56rem;
        height: 3rem;
        width: 17.0625rem;
        border-radius: 0.4375rem;
        padding: 1rem 1rem 0.5rem 1rem;
        position: relative;
        box-sizing: border-box;
    }

    .workspace-name__label{
        cursor: text;
        font-size: 1rem;
        transform: translateY(-1rem);
        transition: all 0.3s;
        margin: 0;
    }

    .workspace-name__input{
        transition: all 0.3s;
        color: #1E293B;
        font-weight: 500;
        margin: auto 0;
    }

    .workspace-name__input:focus + .workspace-name__label{
        font-size: 0.75rem;
        margin-bottom: 0.12rem;
        transform: translateY(-1.5rem);
    }

    .workspace-name__input:valid + .workspace-name__label{
        font-size: 0.75rem;
        margin-bottom: 0.12rem;
        transform: translateY(-1.5rem);
    }

    .workspace-name__input:focus{
        transform: translateY(0.5rem);
    }

    .workspace-name__input:valid{
        transform: translateY(0.5rem);
    }

    .input-error{
        margin: 0;
        margin-left: 1rem;
        font-size: 0.75rem;
        color: red;
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

    .btn.confirm{
        border: 1px solid #4F4F4F;
    }

    .btn.cancel{
        background: #306BFF;
    }

    .btn.cancel .btn-title{
        color:white;
    }
</style>