<template>
  <!--继续存钱-->
  <div class="saveMoneyNext">
    <div class="square">
      <p class="title">是否继续存入</p>
    </div>
    <div class="btn b3 mbl" @click="toHome()">
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
    toHome() {
      this.$router.push({
        name: 'Home',
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