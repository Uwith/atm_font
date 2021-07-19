<template>
  <!--继续存钱-->
  <div class="saveMoneyNext">
    <div class="square">
      <p class="title">已存入金额</p>
      <div class="main-num">
        <p style="float:left;">¥</p>
        <p class="" style="float:right;">{{ overMoney }}</p>
      </div>
    </div>
    <div class="btn b3 mbl" @click="saveMoney()">
      结束放款
    </div>
    <div class="btn b7 mbl " @click="toSaveMoney()">
      继续存款
    </div>
  </div>
</template>

<script>
export default {
  name: "SaveMoneyNext",
  data() {
    return {
      overMoney: 152.55,
    }
  },
  mounted() {
    this.getOverMoney()
  },
  methods: {
    toSaveMoney(overMoney) {

      this.$router.push({
        name: 'SaveMoney',
      })
    },
    saveMoney() {

    },
    getOverMoney() {
    }
  }
}
</script>

<style scoped>

</style>