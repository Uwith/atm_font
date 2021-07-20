<template>
  <!--历史记录-->
  <div class="history">
    <div class="square">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
      </el-table>
    </div>
    <!--    <div class="btn b6 mbl">-->
    <!--      注销-->
    <!--    </div>-->
    <div class="btn b7 mbl" @click="toHome()">
      返回
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryRecord",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    toHome() {
      this.$router.push({
        name: 'Home',
      })
    }
  }
}
</script>

<style scoped>

</style>