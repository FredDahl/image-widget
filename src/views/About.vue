<template>
  <div class="about-container">
    <h1>This is an image gallery demo page</h1>
    <p> Here could product information and similar be displayed in a future version of this site.</p>
    <p> At the present time so is this a placeholder area.</p>
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
.about-container {
  height: 100vh;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
}
.back-button{
padding-top: 50px;
  
}
</style>
