<template>
  <div id="app">
    <Navigation v-show="this.$store.state.token != null"></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/menu/Navigation.vue'
export default {
  name: 'app',
  components:{'Navigation':Navigation}
}
</script>