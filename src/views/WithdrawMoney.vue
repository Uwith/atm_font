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
    <div class="btn b4 mbl" @click="toHome()" v-model="zdy">
      返回
    </div>
    <div class="btn b5 mbl" @click="WithdrawMoney(1000)">
      1,000
    </div>
    <div class="btn b6 mbl" @click="WithdrawMoney(2000)">
      2,000
    </div>
    <div class="btn b7 mbl" @click="WithdrawMoney(5000)">
      10,000
    </div>

    <!--    <div class="btn b8 mbl" @click="WithdrawMoney(this.zdy)" v-model="zdy">-->
    <!--      自定义金额-->
    <!--    </div>-->


  </div>
</template>

<script>
import {doMoney} from "@/api/do-money";

export default {
  name: "WithdrawMoney",
  data() {
    return {
      zdy: 10,
      money: {
        balanceCard: '',
        idCard: 5221,
      },
    }
  },
  methods: {
    WithdrawMoney(inMoney) {
      this.money.balanceCard = inMoney;
      let vm = this;
      vm.$post(vm.API.API_URL_DO_MONEY, {
        money: {
          idCard: this.money.idCard,
          balanceCard: this.money.balanceCard,
        },
        doType: 2
      })
      doMoney(this.money, this.doType).then(res => {
        if (res.data.success) {
          this.$message.success("取款成功");
        } else {
          this.$message.error(res.data.message);
        }
      })
    },
    toHome() {
      this.$router.push({
        name: 'Home',
      })
    }
  }
}
</script>

<style scoped>

</style>