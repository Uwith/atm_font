<template>
  <!--余额-->
  <div class="balance">
    <div class="square">
      <p class="title">余额</p>
      <div class="main-num">
        <p style="float:left;">¥</p>
        <p class="" style="float:right;"> 7777.77</p>
      </div>
    </div>
    <div class="btn b6 mbl" @click="toCancellation()">
      注销
    </div>
    <div class="btn b7 mbl" @click="toHome()">
      返回首页
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance",
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      })
    },
    toCancellation() {
      this.$router.push({
        name: "Cancellation",
      })
    },
  }
}
</script>

<style scoped>
.balance {

}
</style>