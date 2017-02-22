<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~common/stylesheets/reset';

#app {
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, TeXGyreHeros, FreeSans, "Nimbus Sans L", "Liberation Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
