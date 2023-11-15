<template>
    <div>
      <AsideBlock />
      <Header />
      <Workspace />
  
    </div>
  </template>
  
  <script>
    import AsideBlock from '~/components/aside/AsideBlock.vue';
    import Header from '~/components/Header.vue';
    import Workspace from '~/components/Dashboard.vue';
    export default {
      components: {
        AsideBlock, Header, Workspace
      },
      middleware: ['auth']
    }
  </script>