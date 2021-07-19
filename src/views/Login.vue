<template>
  <!--  登录-->
  <div class="login">
    <p class="title">
      Login
    </p>
    <el-input class="input1" v-model="username" prefix-icon="el-icon-user"></el-input>
    <el-input class="input2" v-model="password" prefix-icon="el-icon-key" show-password></el-input>
    <el-button class="but" @click="toLanguage()"> 登录</el-button>
    <el-button class="register" @click="toRegister()"> 注册</el-button>

    <el-input class="input1" v-model="user.cardNum" prefix-icon="el-icon-user"></el-input>
    <el-input class="input2" v-model="user.cardPass" prefix-icon="el-icon-key" show-password></el-input>
    <el-button class="but" @click="userLogin()"> 登录</el-button>
    <a href="/register">
      <el-button class="register"> 注册</el-button>
    </a>
  </div>

</template>

<script>
import {login} from "../api/login";

export default {
  name: "Login",
  data() {
    return {
      user: {
        cardNum: '',
        cardPass: ''
      }
    }
  },
  methods: {
    userLogin() {
      login(this.user).then(res => {
        alert(res.data.message)
      })
    },
    toRegister() {
      this.$router.push({
        name: 'Register'
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
  left: 4vw;
}

.register {
  position: relative;
  top: 6vh;
  left: 9vw;
}
</style>