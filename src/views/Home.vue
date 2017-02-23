<template>
  <div class="home">
    <nav class="index-nav">
      <a class="logo">
        <img src="../assets/logo.png" alt="">
      </a>
      <ul class="left">
        <li v-for="menu in menus" class="left">
          <router-link :to="{path: menu.url}" exact>{{ menu.name }}</router-link>
        </li>
      </ul>
      <div class="right">
        <router-link :to="{path: 'login'}" class="login" exact>登录</router-link>
        <router-link :to="{path: 'singup'}" class="singup" exact>注册</router-link>
      </div>
    </nav>
    <section class="introduce"></section>
  </div>
</template>

<script>
// import { capitalize } from 'common/javascripts/util'
// import Icon from 'components/Icon'
export default {
  data () {
    return {
      menus: [
        {
          name: '首页',
          url: ''
        },
        {
          name: '图库',
          url: '1'
        },
        {
          name: '商务',
          url: '2'
        }
      ]
    }
  },
  methods: {
  },
  computed: {
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '~common/stylesheets/core';
.home {
  position: relative;
  display: block;

  .index-nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70px;
    color: $white;
    z-index: 1;

    ul {

      li {
        display: block;
        margin-left: 30px;

        a {
          display: block;
          color: $white;
          font-size: 14px;
          padding: 0 10px;
          height: 70px;
          line-height: 68px;
          transition: 0.1s ease-in-out;

          &:hover {
            opacity: 0.7;
          }

          &.router-link-active {
            border-bottom: 2px solid $white;
          }
        }
      }
    }

    .right {
      padding: 10px 50px 0px 0px;
      height: 70px;

      a {
        font-size: 14px;
        color: $white;
        transition: 0.1s ease-in-out;

        &:hover {
          opacity: 0.7;
        }
      }

      a.login {
        margin-left: 30px;
      }

      a.singup {
        display: inline-block;
        line-height: 26px;
        height: 28px;
        border-radius: 30px;
        border: 1px solid $white;
        padding: 0 15px;
        margin: 10px 0 10px 30px;
      }
    }

    .logo {
      display: block;
      float: left;
      height: 50px;
      width: 80px;
      margin: 10px 0px 10px 50px;
      background-size: 80px;
      position: relative;
      overflow: hidden;

      img {
        top: -10px;
        left: -15px;
        position: absolute;
        height: 120%;
      }
    }
  }

  .introduce {
    position: relative;
    width: 100%;
    height: calc(100vh - 136px);
    min-height: 320px;
    background-image: url(https://assetcdn.500px.org/assets/static_pages/home/cover_bg-fe148a3a3e535cdc3976a47578ce64ba.jpg);
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    transform: translate3d(0px, 0px, 0px);
  }

  @include max-screen(1200px) {

    h1, p {
      color: $white;
    }
  }
}
</style>
