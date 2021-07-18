<template>
  <div class="home">
    <div class="btn b1 mbl">
      查询余额
    </div>
    <div class="btn b2 mbl">
      历史记录
    </div>
    <div class="btn b4 mbl">
      注销
    </div>
    <div class="btn b5 mbl">
      存款
    </div>
    <div class="btn b6 mbl">
      取款
    </div>
    <div class="hello">
      <p style="font-size:7vh;font-weight:bolder">
        尊敬的客户,上午好!
      </p>
      <br>
      <p style="font-size:5vh;font-weight: 400">
        请选择您所需要的服务
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.hello {
  top: 25vh;
  width: 100vw;
  text-align: center;
}
</style>