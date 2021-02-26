<template>
  <div class="gallery-item-container">
    <router-link :to="this.route">
      <div class="gallery-item">
        <div class="">{{ title }}</div>
        <img :src="require('@/assets/images/gallery/' + imageName + '')" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: {
    title: String,
    route: String,
    imageName: String,
  },
};
</script>

<style scope>
img {
  max-width: 100%;
  max-height: 100%;
}
.gallery-item-container {
  /* border: 1px solid red; */
}
</style>
