<template>
  <div></div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ScreenSizeCalc",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    minBrowserWidth() {
      return this.windowWidth;
    },
  },
  // beforeMount needed to detect if user opens app in small window
  beforeMount() {
    this.windowWidth = window.innerWidth;
    const newWindowWidth = this.minBrowserWidth;
    if (newWindowWidth <= 1150) {
      this.setIsSmallDevice(true);
    } else {
      this.setIsSmallDevice(false);
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      const newWindowWidth = this.minBrowserWidth;

      if (newWindowWidth <= 1150) {
        this.setIsSmallDevice(true);
      } else {
        this.setIsSmallDevice(false);
      }
    });
  },
  methods: {
    ...mapMutations(["setIsSmallDevice"]),
  },
};
</script>

<style scoped></style>
