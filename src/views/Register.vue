<template>
  <!--  登录-->
  <div class="login">
    <p class="title">
      Register
    </p>
    <el-input class="input2" v-model="password" prefix-icon="el-icon-key" show-password></el-input>
    <el-input class="input3" v-model="password_second" prefix-icon="el-icon-key" show-password></el-input>
    <el-button class="but" @click="register()"> 注冊新卡</el-button>
  </div>
</template>

<script>
import {isPositive, isSix} from "@/utils/Regular";

export default {
  name: "Register",
  data() {
    return {
      password: '',
      password_second: '',
    }
  },
  methods: {
    register() {
      if (!this.password === this.password_second) {
        this.$message.error('密码不一致');
        return false;
      }
      if (!isPositive(this.password)) {
        this.$message.error('密码非法字符');
        return false;
      }
      if (!isSix(this.password)) {
        this.$message.error('请输入六位纯数字');
        return false;
      }
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      if (this.password !== null && this.password_second !== null) {
        let vm = this;
        vm.$post(vm.API.API_URL_INSERT_CARD, {
          idCustomer: sessionStorage.getItem('userId'),
          passCard: this.password,
        }).then(res => {
          if (res.data.success) {
            this.$message.success('注册成功');
            loading.close();
            this.$router.push({
              name: "SelectCard",
            })
          } else {
            this.$message.error(res.data.message);
            loading.close();
          }
        })
      } else {
        this.$message.error('密码格式错误');
      }
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
  top: 7vh;
}
</style>