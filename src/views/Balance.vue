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
      var vm = this;
      // var userId = vm.Storage.Session.get("User").id;
      var userId = 5221
      if (userId) {
        vm.$post(vm.API.API_URL_BALANCER, {
          userId: userId
        }).then(res => {
          console.log(res)
          this.balance = res.data;
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