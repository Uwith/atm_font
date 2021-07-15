<template>
  <div style="min-height:730px;height: 98.5vh" class="">
    <!--  <div style="min-height:730px; height:960px" class="">-->
    <div id="background">

    </div>
  </div>
</template>

<script>

import particlesConfig from "./Background.json";

export default {
  name: "Background",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("background", particlesConfig);
    }
  }
}

</script>

<style scoped>
@import "./style.css";
</style>