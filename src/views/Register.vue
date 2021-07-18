<template>
  <!--  登录-->
  <div class="login">
    <p class="title">
      Register
    </p>
    <el-input class="input1" v-model="username" prefix-icon="el-icon-user"></el-input>
    <el-input class="input2" v-model="password" prefix-icon="el-icon-key" show-password></el-input>
    <el-input class="input3" v-model="password_second" prefix-icon="el-icon-key" show-password></el-input>
    <el-button class="but"> 登录</el-button>
  </div>

</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      password_second: '',
    }
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

.input3 {
  position: relative;
  top: 5vh;
}

.but {
  position: relative;
  top: 6vh;
}
</style>