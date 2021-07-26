<template>
  <div class="card-login">
    <div class="square">
      <p class="title">请输入银行卡密码</p>

      <el-input class="input2" v-model="login.passCard" prefix-icon="el-icon-key" show-password></el-input>
    </div>

    <div class="btn b7 mbl" @click="cardLogin()">
      登录
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLogin",
  data() {
    return {
      login: {
        numCard: '',
        passCard: '',
      }
    }
  },
  methods: {
    cardLogin() {
      if (this.password === null) {
        this.$message.error('密码不可为空');
      }
      let vm = this;
      this.login.numCard = sessionStorage.getItem('cardNum')
      console.log(this.login)
      vm.$post(vm.API.API_URL_CARD_LOGIN, this.login).then(res => {
        if (res.data.success) {
          this.$router.push({
            name: 'Home',
          })
        } else {
          this.$message.error(res.data.message);
        }
      })
    }
  }
}
</script>

<style>

</style>