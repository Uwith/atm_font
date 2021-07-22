<template>
  <!--存钱-->
  <div class="saveMoney">
    <div class="square">
      <p class="title">请放入现金</p>
      <div class="main-num ">
        <el-input placeholder="请输入要存款金额" v-model="money.balanceCard">
          <template slot="prepend">¥</template>
        </el-input>

      </div>
      <p>请放入不超过一万元现金</p>
    </div>
    <div class="btn b3 mbl" @click="toHome()">
      返回
    </div>
    <div class="btn b7 mbl" @click="toSaveMoneyNext()">
      确定
    </div>
  </div>
</template>

<script>

export default {
  name: "SaveMoney",
  data() {
    return {
      money: {
        balanceCard: '',
        idCard: 5221,
      },
    }
  },
  methods: {
    toSaveMoneyNext() {
      if (this.money.cardBalance != 0) {
        let vm = this;
        vm.$post(vm.API.API_URL_DO_MONEY, {
          money: {
            idCard: this.money.idCard,
            balanceCard: this.money.balanceCard,
          },
          doType: 1
        }).then(res => {
          if (res.data.success) {
            this.$router.push({
              name: 'SaveMoneyNext',
            })
          } else {
            this.$message.error(res.data.message);
          }
        })
      } else {
        this.$message.error("存入金额不能为空");
      }
    },
    toHome() {
      this.$router.push({
        name: 'Home',
      })
    },
  }
}
</script>

<style>
.el-input__inner {
  height: 7vh;
}
</style>