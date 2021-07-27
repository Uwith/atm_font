<template>
  <!--语言-->

  <div class="language">
    <div class="square">
      <p class="title">请选择语言</p>
    </div>
    <div class="btn b6 mbl" @click="Chinese()">
      中文
    </div>
    <!--    <div class="btn b7 mbl" @click="English()">-->
    <!--      English-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Language",
  methods: {
    Chinese() {
      this.$router.push({
        name: "SelectCard",
      })
    },
    English() {
      this.$router.push({
        name: "Home",
      })
    }
  }
}
</script>

<style scoped>

</style>