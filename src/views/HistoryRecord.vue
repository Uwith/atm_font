<template>
  <!--历史记录-->
  <div class="history">
    <div class="square">
      <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
        <el-table-column
            prop="data"
            label="操作类型"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="操作金额"
            width="180">
        </el-table-column>
        <el-table-column
            prop="date"
            label="操作时间">
        </el-table-column>
      </el-table>
    </div>
    <!--    按钮-->
    <div class="btn b3 mbl" @click="lastPage()">
      上一页
    </div>
    <div class="btn b7 mbl" @click="nextPage()">
      下一页
    </div>
    <div class="btn b8 mbl" @click="toHome()">
      返回
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryRecord",
  methods: {
    tableRowClassName({row, rowIndex}) {
      // todo 好像有问题
      if (this.tableData[rowIndex].doType === 0) {
        return 'warning-row';
      }
      if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    lastPage() {

    },
    nextPage() {

    },
    toHome() {
      this.$router.push({
        name: 'Home',
      })
    }
  },
  data() {
    return {
      //TODO vuex 取
      nowPage: '0',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        doType: 0,
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
}
</script>

<style>

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

/* todo 背景透明 粘来的 再细看 */

/*.el-table th, .el-table tr {*/
/*  background-color: transparent!important;*/
/*  -webkit-filter: opacity(30%); !* Chrome, Safari, Opera *!*/
/*  filter: opacity(30%);*/
/*}*/

/*.el-table th{*/
/*  color: #000000; !* 字体颜色 *!*/
/*  font-size: 16px;*/
/*  background-color: transparent !important;!* 背景透明 *!*/
/*  border: 0;*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*}*/
/*.el-table tr, .el-table td {*/
/*  color: #7d7575;*/
/*  font-size: 12px;*/
/*  background-color: transparent !important;!* 背景透明 *!*/
/*  border: 0;*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*}*/
/* 上面两个背景色透明才能让table的背景透明少一个都不行 */
</style>