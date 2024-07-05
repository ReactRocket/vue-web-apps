<template lang="">
    <div>
        <button @click="increment">+</button>
        <span>{{count}}</span>
        <button @click="decrement">-</button>
    </div>
</template>
<script>
export default {
    computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    },
    },
}
</script>
<style lang="">
    
</style>