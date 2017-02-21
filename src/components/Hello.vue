<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="onClick">click</p>
    <p>{{soap}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Soap'
    }
  },
  methods: {
    onClick () {
      this.$store.dispatch('test')
    }
  },
  computed: {
    soap () {
      return this.$store.state.index.soap
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
