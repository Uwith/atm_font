<template>
  <!--  登录-->
  <div class="login">
    <p class="title">
      Login
    </p>
    <el-input class="input1" v-model="user.userkeyCustomer" prefix-icon="el-icon-user"></el-input>
    <el-input class="input2" v-model="user.passkeyCustomer" prefix-icon="el-icon-key" show-password></el-input>
    <el-button class="but" @click="userLogin()"> 登录</el-button>
  </div>

</template>

<script>

import {isPositive} from "@/utils/Regular";

export default {
  name: "Login",
  data() {
    return {
      user: {
        userkeyCustomer: '',
        passkeyCustomer: ''
      },
      ids: {},
    }
  },
  methods: {
    userLogin() {
      if (!isPositive(this.user.userkeyCustomer)) {
        this.$message.error('用户名非法字符');
        return false;
      }
      if (!isPositive(this.user.passkeyCustomer)) {
        this.$message.error('密码非法字符');
        return false;
      }
      let vm = this;
      vm.$post(vm.API.API_URL_LOGIN, {
        userkeyCustomer: this.user.userkeyCustomer,
        passkeyCustomer: this.user.passkeyCustomer
      }).then(res => {
        // 存入token
        sessionStorage.setItem('token', res.data.data)
        if (res.data.success) {
          // 从token中获取id
          let tokenCut = sessionStorage.getItem('token').split('.')
          // let tokenCut = sessionStorage.getItem('token').split('.')
          this.ids = window.atob(tokenCut[0])
          // 存入ID
          sessionStorage.setItem('userId', JSON.parse(this.ids).userId)
          this.toLanguage()
        } else {
          this.$message.error(res.data.message);
        }
      })
    },
    toLanguage() {
      this.$router.push({
        name: 'Language'
      })
    },
  }
}
</script>

<style scoped>
.login {
  width: 26vw;
  height: 30vh;
  /*透明*/
  background: rgba(255, 255, 255, .3);
  box-shadow: 3px 3px 6px 3px rgba(83, 81, 81, 0.22);
  overflow: hidden;
  /*圆角*/
  border-radius: 1vh;

  position: absolute;
  top: 30vh;
  left: 28vw;

  /*内边距*/
  padding: 4vw 8vw;

}

.input1 {
  position: relative;
  top: 1vh;
}

.input2 {
  position: relative;
  top: 3vh;
}

.but {
  position: relative;
  top: 6vh;
  left: 9vw;
}

.register {
  position: relative;
  top: 6vh;
  left: 9vw;
}
</style>