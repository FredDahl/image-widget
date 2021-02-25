<template>
  <div class="home-container">
    <div class="home-grid-container">
      <div class="image-slide-container">
        <ImageSlide class="imageslide" />
      </div>
      <div class="image-gallery">
        <ImageGallery />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageSlide from "@/components/ImageSlide.vue";
import ImageGallery from "@/components/ImageGallery.vue";

export default {
  name: "Home",
  components: { ImageSlide, ImageGallery },
};
</script>

<style scoped>
.home-container {
  background-color: #ebebeb;
}
.home-grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.image-slide-container {
  grid-row: 1 / span 1;
}
.image-gallery {
  grid-row: 2 / span 1;
}
</style>
