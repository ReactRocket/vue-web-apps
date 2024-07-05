<template setup>
  <BackToHome />
  <RouterView />
</template>
<script>
import BackToHome from './components/common/BackToHome.vue'
export default {
  components: { BackToHome },
  data() {
    return {
      baseURL: null,
    } 
  },
}
</script>
<style lang="">
  
</style>