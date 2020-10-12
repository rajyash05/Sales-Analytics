<template>
  <div id="app">
    <StoreAnalytics/>
  </div>
</template>

<script>
// imported store view
import StoreAnalytics from './views/store-analytics/store-analytics.vue';

export default {
  name: 'App',
  components: {
    StoreAnalytics,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
