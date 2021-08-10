<template>
  <div class="select-card">
    <div class="square">
      <p class="title">选卡</p>
      <el-card v-for="card in cardInfo" class="box-card">
        <div :key="card.id" class="text item" @click="select(card.id,card.numCard)">
          {{ card.numCard }}
        </div>
      </el-card>
    </div>
    <div class="btn b7 mbl" @click="toRegister()">
      注册新卡
    </div>
    <div class="btn b3 mbl" @click="toLanguage()">
      返回
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectCard",
  data() {
    return {
      ids: {},
      cardInfo: []
    }
  },
  mounted() {
    this.getCard();
  },
  methods: {
    getCard() {
      // vuex取出userID
      let userId = sessionStorage.getItem('userId')
      let vm = this;
      vm.$post(vm.API.API_URL_CARD_INFO + "?userId=" + userId)
          .then(res => {
            // this.cardInfo = response.data.data;
            if (res.data.success) {
              this.cardInfo = res.data.data;
            } else {
              this.$message.error(res.data.message);
            }
          })
    },
    select(cardId, numCard) {
      sessionStorage.setItem('cardId', cardId);
      sessionStorage.setItem('cardNum', numCard);
      this.$router.push({
        name: 'CardLogin',
      })
    },
    toLanguage() {
      this.$router.push({
        name: 'Language'
      })
    },
    toRegister() {
      this.$router.push({
        name: 'Register'
      })
    },
  }
}
</script>

<style>
.text {
  font-size: 14px;
  line-height: 0;

}

/*.item {*/
/*  padding: 18px 0;*/
/*}*/

.box-card {
  margin: 0;
  padding: 0;
  height: 10vh;
  width: 49vw;
}
</style>