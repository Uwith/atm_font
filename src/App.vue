<template>
  <div id="app">
    <div class="bg">
      <Background/>
      <router-view class="router-css"/>
    </div>
  </div>
</template>
<script>
import Background from "@/components/particles/Background";

export default {
  name: "Main",
  components: {Background}
}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  position: relative;
}

</style>
