<template>
    <section class="workspaces">
        <table class="table">
            <thead class="workspaces__head">
                <tr class="row">
                    <th class="workspace-head__name cell"><span>Название проекта</span></th>
                    <th class="workspace-head__created cell"><span>Дата создания</span></th>
                    <th class="workspace-head__edit cell"><span>Редактировать</span></th>
                    <th class="workspace-head__edit cell"><span>Удалить</span></th>
                </tr>
            </thead>
            <tbody class="workspace_info">
                <WorkspaceItem v-for="workspace in workspaces" :key="workspace.id" :workspace="workspace"/>
            </tbody>
        </table>
    </section>
</template>

<script>
    import WorkspaceItem from './WorkspaceItem.vue';
    export default {
        props:{
            workspaces: []
        },
        components: {
            WorkspaceItem
        }
    }
</script>

<style scoped>
    .table{
        width: 100%;
        max-width: 100%;
        word-wrap: break-word;
        border-collapse: separate;
        table-layout: fixed;
        border-spacing: 0 0.62rem;
    }

    .cell {
        padding: 1rem;
        text-align: left;
        vertical-align: middle;
    }

    .workspaces__head .cell{
        color: #1E293B;
    }

    .workspaces__head .cell:last-of-type{
        width: 5rem;
        text-align: center;
    }

    .workspaces__head .cell:nth-last-of-type(2){
        width: 8rem;
        text-align: center;
    }
</style>