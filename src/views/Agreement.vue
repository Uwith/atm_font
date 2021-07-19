<template>
  <!--协议-->
  <div class="agreement">
    <div class="square">
      <p class="title">安全协议</p>
      <p class="text">临时卡觉得覅就是东非金属实力坑爹解放了时间反射圣诞福利就是临时卡觉得覅就是东非金属实力坑爹解放了时间反射圣诞福利就是临时卡觉得覅就是东非金属实力坑爹解放
        两款发动机绿色科技风解放路快速减肥的辅导记录所肩负的登录可使肌肤</p>
      <p class="text">osidfoisuoifdusodufoijsodifuosaijfpoisfisuafdojfoisjdflsajofij
        fdiusoifjslidfuosaijfolsaiudfoi</p>
    </div>
    <div class="btn b3 mbl " @click="toLogin()">
      注销
    </div>
    <div class="btn b7 mbl" @click="toLanguage()">
      同意
    </div>
  </div>
</template>

<script>
export default {
  name: "Agreement",
  methods: {
    toLogin() {
      this.$router.push({
        name: 'Login',
      })
    },
    toLanguage() {
      this.$router.push({
        name: 'Language',
      })
    }
  }
}
</script>

<style scoped>

</style>