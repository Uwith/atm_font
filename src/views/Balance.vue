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
    <!--    <div class="btn b6 mbl" @click="toCancellation()">-->
    <!--      注销-->
    <!--    </div>-->
    <div class="btn b7 mbl" @click="toHome()">
      返回首页
    </div>
  </div>
</template>

<script>
import {balance} from "@/api/balance";

export default {
  name: "Balance",
  data() {
    return {
      balance: '',
      // todo vuex id
      id: '111'
    }
  },
  mounted() {
    this.getBalance();
  },
  methods: {
    getBalance() {
      // todo vuex id
      balance(this.id).then(res => {
        this.balance = res.data.data.cardBalance;
      })
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