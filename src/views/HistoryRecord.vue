<template>
  <!--历史记录-->
  <div class="history">
    <div class="history-bg">
      <div class="history-main">
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
          <el-table-column
              prop="data"
              label="操作类型"
              width="160vw">
          </el-table-column>
          <el-table-column
              prop="name"
              label="操作金额"
              width="160vw">
          </el-table-column>
          <el-table-column
              prop="date"
              label="操作时间">
          </el-table-column>
        </el-table>
      </div>
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
  data() {
    return {
      // todo vuex 取
      nowPage: '0',
      tableData: [{
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }]
    }
  },
  mounted() {
    this.getHistory()
  },
  methods: {
    getHistory() {
      let cardId = sessionStorage.getItem('cardId')
      console.log(cardId)
      let vm = this;
      // vm.$post(vm.API.API_URL_CARD_LOG + "?cardId=" + '5221')
      vm.$post(vm.API.API_URL_CARD_LOG + "?cardId=" + cardId)
          .then(res => {
            console.log(res.data)
          })
    },
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

}
</script>

<style>
.history-bg {
  /*大小*/
  width: 58vw;
  height: 54vh;
  /*相对定位*/
  position: relative;
  top: 17vh;
  left: 20vw;
  /*  圆角*/
  border-radius: 2%;

  background-color: #fff;
}

.history-main {

}

.el-table__body {
  background-color: #e20d0d;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

/* todo 背景透明 粘来的 再细看 */

</style>