<template>
  <ul>
    <li v-for="item in items">
      {{item.title}}: {{item.description}}
      <span @click="toggleFavourite(item.key)">{{item.favourite}}</span>
    </li>
  </ul>
</template>

<script>
  let subscription

  export default {
    name: 'page',
    data () {
      return {
        items: []
      }
    },
    methods: {
      toggleFavourite (key) {
        const favourite = this.$client.get([ 'content', key, 'favourite' ])
        favourite.set(!favourite.compute())
      }
    },
    created () {
      subscription = this.$client.get('route', {}).subscribe(page => {
        if (page.get('items')) {
          this.$client.emit('routeUpdate', page.serialize().pop())
          this.items = page.get('items')
            .map((item, key) => ({
              key,
              title: item.get('title').compute(),
              description: item.get('description').compute(),
              favourite: item.get('favourite') && item.get('favourite').compute() ? '★' : '☆'
            }))
        }
      })
    },
    destroyed: () => subscription.unsubscribe()
  }
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
