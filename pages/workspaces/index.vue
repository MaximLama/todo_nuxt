<template>
    <div>
      <AsideBlock />
      <Header />
      <Dashboard />
  
    </div>
  </template>
  
  <script>
    import AsideBlock from '~/components/aside/AsideBlock.vue';
    import Header from '~/components/Header.vue';
    import Dashboard from '~/components/dashboard/Dashboard.vue';
    export default {
      components: {
        AsideBlock, Header, Dashboard
      },
      middleware: ['auth']
    }
  </script>