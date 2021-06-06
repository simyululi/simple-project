<template>

  <div class="CustToast"
       :class="type"
       v-if="showToast">
    <span class="msgbox">{{ message }}</span>
  </div>

</template>

<script>
  export default {
    name: "CustToast",
    data() {
      return {
        showToast: true,
        message: "消息提示",
        duration: 3000
      }
    },
  }
</script>

<style lang="scss">
  .CustToast {
    position: fixed;
    width: 250px;
    height:30px;
    left: 50%;
    top: 50%;
    background: rgb(233, 233, 235);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    animation: show-toast .2s;
    color: #909399;
    overflow: hidden;
    display: flex;
    font-size: 16px;
  }
  .msgbox{
    text-align: center;
    margin: auto;
    align-items: center;
  }

  @keyframes show-toast {
    from {
      opacity: 0;
    }
    to {
      opacity: .7;
    }
  }

</style>
