<template>
  <div
    class="gallery-item-container"
    v-on:click="setSelectedImage(imageName)"
  >
    <router-link to="/imageview">
      <div class="gallery-item">
        <img :src="require('@/assets/images/gallery/' + imageName + '')" />
        <div class="overlay">
          <div class="text-container">
            <div>&#9825; {{ likes }}</div>
            <div class="">{{ description }}</div>
          </div>
        </div>
      </div>
      <div class="title">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "GalleryItem",
  data() {
    return {};
  },
  props: {
    title: String,
    route: String,
    imageName: String,
    likes: String,
    description: String,
  },
  methods: {
    ...mapMutations(["setSelectedImage"]),
  },
};
</script>

<style scope>
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.gallery-item-container {
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
.text-container {
  height: 100%;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.title {
  color: black;
  padding: 8px;
  font-size: 14px;
  text-decoration: none;
}
@media screen and (max-width: 1000px) {
  div.title {
    display: none;
  }
}
</style>
