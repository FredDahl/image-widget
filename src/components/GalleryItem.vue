<template>
  <div class="gallery-item-container">
    <router-link :to="this.route">
      <div class="gallery-item">
        <div class="">{{ title }}</div>
        <img :src="require('@/assets/images/gallery/' + imageName + '')" />
        <div class="overlay">
          <div class="text">&#9825; {{ likes }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    title: String,
    route: String,
    imageName: String,
    likes: Number,
  },
};
</script>

<style scope>
img {
  max-width: 100%;
  max-height: 100%;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
}

.overlay {
  position: absolute;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);

  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  font-size: 20px;
  height: 100%;
  width: 100%;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.text {
  position: absolute;
  bottom: 50%; 
  width: 100%;
  color: #f1f1f1;
}
</style>
