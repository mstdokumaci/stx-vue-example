<template>
  <select v-model="user">
    <option value="user-a">User A</option>
    <option value="user-b">User B</option>
    <option value="user-c">User C</option>
  </select>
</template>

<script>
  import client from '../client'
  let listener

  export default {
    name: 'user',
    data () {
      return {
        user: ''
      }
    },
    watch: {
      user (val) {
        client.switchBranch(val)
      }
    },
    created () {
      listener = client.on('connected', val => {
        if (val) {
          this.user = 'user-a'
        }
      })
    },
    destroyed: () => listener.off()
  }
</script>

<style scoped>
</style>
