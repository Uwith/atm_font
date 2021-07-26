<template>
  <!--余额-->
  <div class="balance">
    <div class="square">
      <p class="title">余额</p>
      <div class="main-num">
        <p style="float:left;">¥</p>
        <p class="" style="float:right;"> {{ this.balance }}</p>
      </div>
    </div>

    <div class="btn b7 mbl" @click="toHome()">
      返回首页
    </div>
  </div>
</template>

<script>

export default {
  name: "Balance",
  data() {
    return {
      balance: '',
      // todo vuex id
    }
  },
  mounted() {
    this.getBalance();
  },
  methods: {
    getBalance() {
      let vm = this;
      let cardId = sessionStorage.getItem('cardId')
      if (cardId) {
        vm.$post(vm.API.API_URL_BALANCER + "?cardId=" + cardId).then(res => {
          console.log(res)
          this.balance = res.data.data;
        })
      }
      // todo vuex id
    },
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