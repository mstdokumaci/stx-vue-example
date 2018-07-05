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
          if (this.user === '') {
            this.user = 'user-a'
          } else {
            // in case of reconnect
            client.switchBranch(this.user)
          }
        }
      })
    },
    destroyed: () => listener.off()
  }
</script>

<style scoped>
</style>
