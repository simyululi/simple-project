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
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
    getUser(){
      getUserInfo().then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount(){
      getCartInfo().then((res = 0) => {
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
