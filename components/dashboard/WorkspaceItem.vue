<template>
    <tr class="row">
        <td class="workspace-info__name cell">
            <nuxt-link :to="'/workspaces/'+workspace.id" class="workspace-info__link">{{ workspace.title }}</nuxt-link>
        </td>
        <td class="workspace-info__created cell"><span>Дата создания</span></td>
        <td class="workspace-info__edit cell">
            <svg @click="editWorkspace" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle opacity="0.1" cx="15" cy="15" r="15" fill="#4676FB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8338 18.568L17.7389 13.518C17.9511 13.2456 18.0266 12.9308 17.9558 12.6102C17.8945 12.3188 17.7153 12.0417 17.4465 11.8315L16.7909 11.3107C16.2203 10.8568 15.5128 10.9046 15.1072 11.4254L14.6686 11.9944C14.612 12.0656 14.6262 12.1707 14.6969 12.228C14.6969 12.228 15.8052 13.1166 15.8288 13.1358C15.9043 13.2074 15.9609 13.303 15.975 13.4176C15.9986 13.6422 15.843 13.8524 15.6119 13.8811C15.5034 13.8954 15.3996 13.862 15.3242 13.7999L14.1593 12.873C14.1027 12.8305 14.0178 12.8395 13.9706 12.8969L11.2022 16.4801C11.0229 16.7047 10.9616 16.9961 11.0229 17.278L11.3767 18.8116C11.3955 18.8928 11.4663 18.9502 11.5512 18.9502L13.1075 18.9311C13.3905 18.9263 13.6546 18.7973 13.8338 18.568ZM16.0132 18.0903H18.551C18.7986 18.0903 19 18.2943 19 18.5451C19 18.7964 18.7986 18.9999 18.551 18.9999H16.0132C15.7656 18.9999 15.5642 18.7964 15.5642 18.5451C15.5642 18.2943 15.7656 18.0903 16.0132 18.0903Z" fill="#4676FB"/>
            </svg>
        </td>
        <td class="workspace-info__delete cell">
            <svg @click="deleteWorkspace" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle opacity="0.05" cx="15" cy="15" r="15" fill="#FF0000"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8355 11.6575C19.0343 11.6575 19.1999 11.8226 19.1999 12.0327V12.2269C19.1999 12.4318 19.0343 12.602 18.8355 12.602H10.3647C10.1654 12.602 9.99988 12.4318 9.99988 12.2269V12.0327C9.99988 11.8226 10.1654 11.6575 10.3647 11.6575H11.855C12.1577 11.6575 12.4212 11.4423 12.4893 11.1387L12.5673 10.7902C12.6886 10.3154 13.0878 10 13.5446 10H15.6552C16.107 10 16.5107 10.3154 16.6275 10.7651L16.711 11.1382C16.7786 11.4423 17.042 11.6575 17.3453 11.6575H18.8355ZM18.0784 18.7575C18.234 17.3075 18.5064 13.8626 18.5064 13.8279C18.5163 13.7226 18.482 13.6229 18.4139 13.5427C18.3408 13.4675 18.2484 13.4231 18.1465 13.4231H11.0571C10.9547 13.4231 10.8573 13.4675 10.7897 13.5427C10.7211 13.6229 10.6873 13.7226 10.6922 13.8279C10.6931 13.8342 10.7029 13.9556 10.7193 14.1585C10.7919 15.0597 10.994 17.5697 11.1247 18.7575C11.2171 19.6325 11.7913 20.1824 12.6229 20.2024C13.2646 20.2172 13.9258 20.2223 14.6018 20.2223C15.2385 20.2223 15.8852 20.2172 16.5469 20.2024C17.4073 20.1876 17.9809 19.6473 18.0784 18.7575Z" fill="#FF0000"/>
            </svg>
        </td>
    </tr>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        props: {
            workspace: {
                type: Object,
                default: {
                    title: 'Blank',
                    color: '#FFFFFF'
                }
            },
        },
        methods:{
            deleteWorkspace(){
                this.setDeleteModalState({showModal: true, id: this.workspace.id});
            },
            editWorkspace(){
                this.openEditModal({showModal: true, id: this.workspace.id, color: this.workspace.color, title: this.workspace.title});
            },
            ...mapMutations({
                setDeleteModalState: 'delete-workspace-modal/SET_MODAL_STATE',
                openEditModal: 'edit-workspace-modal/SET_MODAL_STATE'
            })
        }
    }
</script>

<style scoped>
    .cell {
        padding: 1rem;
        text-align: left;
        vertical-align: middle;
        border: none;
        border-bottom: 0.0625rem solid #E9EFF4;
        border-top: 0.0625rem solid #E9EFF4;
    }

    .cell:first-of-type{
        border-left: 0.0625rem solid #E9EFF4;
        border-top-left-radius: 1.375rem;
        border-bottom-left-radius: 1.375rem;
    }

    .cell:last-of-type{
        border-right: 0.0625rem solid #E9EFF4;
        border-top-right-radius: 1.375rem;
        border-bottom-right-radius: 1.375rem;
    }

    .cell:last-of-type{
        width: 5rem;
        text-align: center;
    }

    .cell:nth-last-of-type(2){
        width: 8rem;
        text-align: center;
    }

    .row:hover{
        background-color: #306BFF;
        color: white;
    }

    .row:hover svg circle{
        fill: #FAFAFB;
    }

    .row:hover svg path{
        fill: #FAFAFB;
    }

    .workspace-info__edit svg:hover{
        transform: scale(1.2);
        cursor: pointer;
    }

    .workspace-info__delete svg:hover{
        transform: scale(1.2);
        cursor: pointer;
    }

    .workspace-info__link{
        color: inherit;
    }
    
    .workspace-info__link:hover{
        text-decoration: underline;
    }
</style>