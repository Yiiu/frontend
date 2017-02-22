<template>
  <div class="home">
    <h1>
    {{ soap }}
    </h1>
    <p @click="onClick">Switch</p>
    <Icon type="bug" size="2x" spin />
  </div>
</template>

<script>
import { capitalize } from 'common/javascripts/util'
import Icon from 'components/Icon'
export default {
  data () {
    return {
      soap: 'hello soap',
      name: 'hello soap'
    }
  },
  methods: {
    onClick () {
      this.soap = this.soap === this.name ? capitalize(this.name) : this.name
    }
  },
  computed: {
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '~common/stylesheets/core';

.home {
  display: block;
  margin: 10px auto;
  padding: 20px 0;
  width: 300px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .16);

  h1 {
    margin-bottom: 20px;
    color: $pink;
  }

  p {
    font-size: 16px;
    color: $blue;
  }

  @include max-screen(1200px) {
    background-color: $pink;

    h1, p {
      color: $white;
    }
  }
}
</style>
