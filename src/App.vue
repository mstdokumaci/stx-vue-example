<template>
  <div class="app" id="app">
    <User />
    <Menu />
    <Page />
  </div>
</template>

<script>
  import User from '@/components/User.vue'
  import Menu from '@/components/Menu.vue'
  import Page from '@/components/Page.vue'

  export default {
    name: 'app',
    components: { User, Menu, Page }
  }
</script>

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

.app {
    color: #444;
    margin-top: 100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
}
</style>
