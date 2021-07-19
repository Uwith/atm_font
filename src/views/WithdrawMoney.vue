<template>
  <!--取钱-->
  <div class="withdrawMoney">
    <div class="square">
      <p class="title-center">请选择取款金额</p>
    </div>

    <div class="btn b1 mbl" @click="WithdrawMoney(100)">
      100
    </div>
    <div class="btn b2 mbl" @click="WithdrawMoney(200)">
      200
    </div>
    <div class="btn b3 mbl" @click="WithdrawMoney(500)">
      500
    </div>
    <div class="btn b4 mbl" @click="WithdrawMoney(1000)">
      1,000
    </div>
    <div class="btn b5 mbl" @click="WithdrawMoney(2000)">
      2,000
    </div>
    <div class="btn b6 mbl" @click="WithdrawMoney(5000)">
      5,000
    </div>
    <div class="btn b7 mbl" @click="WithdrawMoney(10000)">
      10,000
    </div>
    <div class="btn b8 mbl" @click="WithdrawMoney(this.zdy)" v-model="zdy">
      自定义金额
    </div>
  </div>
</template>

<script>
export default {
  name: "WithdrawMoney",
  data() {
    return {
      zdy: 10
    }
  },
  methods: {
    WithdrawMoney() {

    }
  }
}
</script>

<style scoped>

</style>