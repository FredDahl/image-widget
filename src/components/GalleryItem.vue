<template>
  <div class="gallery-item-container">
    <router-link :to="this.route">
      <div class="gallery-item">
        <div class="">{{ title }}</div>
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
  },
};
</script>

<style scope>
.gallery-item-container {
  border: 1px solid red;
}
</style>
