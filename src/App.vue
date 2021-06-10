<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getUserInfo, getCartInfo} from "@/api";

export default {
  name: 'App',
  components: {

  },
  data(){
    return{

    }
  },
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods:{
    getUser(){
      getUserInfo().then((res) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount(){
      getCartInfo().then((res) => {
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
