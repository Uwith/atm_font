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
        idCard: 1627010720508389,
        doType: 1
      },

    }
  },
  methods: {
    toSaveMoneyNext() {
      if (this.money.balanceCard === 0) {
        this.$message.error("存入金额不能为空");
      }
      if (this.money.balanceCard % 100 !== 0) {
        this.$message.error("请存入整百金额");
      } else {
        let vm = this;
        this.money.idCard = sessionStorage.getItem('cardId')
        vm.$post(vm.API.API_URL_DO_MONEY, this.money).then(res => {
          if (res.data.success) {
            this.$message.success('存入成功');
            this.$router.push({
              name: 'SaveMoneyNext',
            })
          } else {
            this.$message.error(res.data.message);
          }
        })
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