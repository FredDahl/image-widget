<template>
  <div class="home-container">
    <ScreenSizeCalc />
    <div class="home-grid-container">
      <div class="image-slide-container">
        <ImageSlide class="imageslide" />
      </div>
      <div class="image-gallery-container">
        <div :class="{ hidden: this.getIsSmallDevice }">
          <ImageGallery />
        </div>
        <div :class="{ hidden: !this.getIsSmallDevice }">
          <MobileImageGallery />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScreenSizeCalc from "@/components/ScreenSizeCalc.vue";
import ImageSlide from "@/components/ImageSlide.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import MobileImageGallery from "@/components/MobileImageGallery.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { ScreenSizeCalc, ImageSlide, ImageGallery, MobileImageGallery },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIsSmallDevice"]),
  },
  mounted() {
    console.log(this.getIsSmallDevice);
  },
};
</script>

<style scoped>
.home-container {
  height: 100vh;
  background-color: #ebebeb;
}
.home-grid-container {
  display: grid;
  grid-template-rows: 1fr 2fr;
}
.image-slide-container {
  grid-row: 1 / span 1;
}
.image-gallery-container {
  grid-row: 2 / span 1;
}
.hidden {
  display: none !important;
}
</style>
