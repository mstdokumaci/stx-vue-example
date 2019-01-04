<template>
  <ul>
    <li v-for="item in items" @click="openPage(item.key)" v-bind:style="{'font-weight': key === item.key ? 'bold' : 'normal'}">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
  let subscription, listener

  export default {
    name: 'menu',
    data () {
      return {
        items: [],
        key: ''
      }
    },
    methods: {
      openPage (key) {
        this.$client.get('route').set([ '@', 'content', key ])
        this.key = key
      }
    },
    created () {
      subscription = this.$client.get([ 'content', 'menu' ], {})
        .subscribe({ depth: 2 }, items => {
          this.items = items
            .map((item, key) => ({ key, title: item.get('title').compute() }))
        })

      listener = this.$client.on('routeUpdate', key => this.key = key)
    },
    destroyed: () => subscription.unsubscribe() || listener.off()
  }
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>
