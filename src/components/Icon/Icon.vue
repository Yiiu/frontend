<!-- 
refer: http://fontawesome.io/examples/

{
  type: 'check' //icon类型 必须
  size: '5x' //大小
  rotate: '90' //旋转角度
  flip: true //horizontal or vertical
  fw: true //fixed width
  spin: true //转动
  others: '...others' //其他
} 
-->

<template>
  <i :class="['soap-icon icon fa', style]"></i>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      type: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: 'lg'
      },
      rotate: {
        type: Number,
        default: 0
      },
      flip: String,
      fw: Boolean,
      spin: Boolean,
      others: String
    },
    computed: {
      'style': function () {
        let style = ''
        let p = ' fa-'

        style += p + this.type
        this.size !== '' ? style += p + this.size : void 0
        this.rotate > 0 ? style += p + 'rotate-' + this.rotate : void 0
        this.flip !== '' ? style += p + this.flip : void 0
        this.fw ? style += p + 'this.fw' : void 0
        this.spin ? style += p + 'spin' : void 0
        this.others !== '' ? style += this.others : void 0
        return style
      }
    }
  }
</script>

<style src="font-awesome/scss/font-awesome.scss" lang="scss">
  .soap-icon {
    user-select:none;
  }
</style>
