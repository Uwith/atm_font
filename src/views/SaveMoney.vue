<template>
  <!--存钱-->
  <div class="saveMoney">
    <div class="square">
      <p class="title">请放入现金</p>
      <div class="main-num ">
        <el-input placeholder="请输入要存款金额" v-model="input">
          <template slot="prepend">¥</template>
        </el-input>

      </div>
      <p>请放入不超过一万元现金</p>
    </div>
    <div class="btn b3">
      返回
    </div>
    <div class="btn b7">
      同意
    </div>
  </div>
</template>

<script>
export default {
  name: "SaveMoney",
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.el-input__inner {
  height: 7vh;
}
</style>