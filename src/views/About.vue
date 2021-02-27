<template>
  <div class="about-container">
    <h1>This is an image gallery demo page</h1>
    <p>
      Here could product information and similar be displayed in a future
      version of this site.
    </p>
    <p>At the present time so is this a placeholder area.</p>
    <p>This project is made public on GitHub:</p>
    <a href="https://github.com/FredDahl/image-widget" target="_blank"
      >GitHub repo for Image Widget</a
    >
    <BackButton class="back-button" route="./" />
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
export default {
  components: { BackButton },
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
.about-container {
  height: 100vh;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
}
.back-button {
  padding-top: 50px;
}
</style>
