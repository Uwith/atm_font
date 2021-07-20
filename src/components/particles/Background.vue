<template>
  <div class="BG">
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
.BG {
  min-height: 730px;
  height: 100vh
}

@import "./style.css";
</style>