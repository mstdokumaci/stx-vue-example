<template>
  <select v-model="user">
    <option value="user-a">User A</option>
    <option value="user-b">User B</option>
    <option value="user-c">User C</option>
  </select>
</template>

<script>
  let listener

  export default {
    name: 'user',
    data() {
      return {
        user: ''
      }
    },
    watch: {
      user(val) {
        this.$client.switchBranch(val)
      }
    },
    created() {
      listener = this.$client.on('connected', val => {
        if (val) {
          if (this.user === '') {
            this.user = 'user-a'
          } else {
            // in case of reconnect
            this.$client.switchBranch(this.user)
          }
        }
      })
    },
    destroyed() {
      listener && listener.off()
      listener = null
    }
  }
</script>

<style scoped>
</style>