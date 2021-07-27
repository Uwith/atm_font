<template>
  <!--历史记录-->
  <div class="history">
    <div class="history-bg">
      <div class="history-main">
        <el-table
            :data="tableData.slice((currentPage - 1) * numPage, currentPage * numPage)"
            style="width: 100%"
        >
          <el-table-column
              prop="typeCard"
              label="操作类型"
              width="160vw">
          </el-table-column>
          <el-table-column
              prop="amountCard"
              label="操作金额"
              width="160vw">
          </el-table-column>
          <el-table-column
              prop="operationTimeCard"
              label="操作时间">
          </el-table-column>

        </el-table>
        <div class="block">
          <el-pagination
              :hide-on-single-page="value"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="numPage"
              layout="total, prev, pager, next"
              :total="this.tableData.length">
          </el-pagination>
        </div>
      </div>
    </div>

    <!--    按钮-->
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
      tableData: [],
      numPage: 8,
      currentPage: 1,
      value: true,
    }
  },
  mounted() {
    this.getHistory()
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    getHistory() {
      let cardId = sessionStorage.getItem('cardId')
      let vm = this;
      vm.$post(vm.API.API_URL_CARD_LOG + "?cardId=" + cardId)
          .then(res => {
            this.tableData = res.data.data
            this.tableData.forEach((item, index) => {
              if (item.typeCard === 1) {
                item.typeCard = '存款'
              } else {
                item.typeCard = '取款'
              }
            })
          })
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
  height: 60vh;
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