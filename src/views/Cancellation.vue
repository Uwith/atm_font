<template>
  <!--注销-->
  <div class="cancellation">
    <div class="square">
      <div class="title-center">
        <p>确定要退出吗?</p>
      </div>
    </div>
    <div class="btn b3 mbl" @click="toHome()">
      取消
    </div>
    <div class="btn b7 mbl" @click="toLogin()">
      退出
    </div>
  </div>
</template>

<script>
export default {
  name: "Cancellation",
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      })
    },
    toLogin() {
      this.$router.push({
        name: "Login",
      })
    }
  }
}
</script>

<style scoped>

</style>