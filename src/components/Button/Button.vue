<!-- 
  因为Button和button在使用时会冲突，所以最好这样子用
  import SButton from 'components/Button'

  type: button/reset/submit
  role: default/primary/info/success...
  size: xs/sm/lg
  disabled: true/false
  handler: Function //父组件传进来的函数
 -->
<template>
	<button
		:type="type"
		:class="['sofa-btn', style]" 
		:disabled="disabled"
    @click='click'
	>
		<slot></slot>
	</button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    role: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'sm'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handler: Function
  },
  methods: {
    click () {
      this.handler ? this.handler() : void 0
    }
  },
  computed: {
    'style': function () {
      let style = ''
      let p = ' btn-'
      style += p + this.role + p + this.size
      return style
    }
  }
}
</script>
<style lang="scss">
@import './Button'
</style>
