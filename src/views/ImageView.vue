<template>
  <div class="imageview-container">
    <div>
      <img :src="require('@/assets/images/gallery/' + getSelectedImage)" />
    </div>
    <p> You have selected {{ getSelectedImage }} </p>
    <BackButton class="back-button" route="./" />
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "ImageView",
  components: { BackButton },
  computed: {
    ...mapGetters(["getSelectedImage"])
  }
};
</script>

<style scoped>
a {
  padding: 20px;
}
a:link {
  color: blue;
}
a:visited {
  color: blue;
}
a:hover {
  color: #42b983;
}
.imageview-container {
  height: 100%;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.back-button {
  padding-top: 50px;
}
</style>
