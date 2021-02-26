<template>
  <div class="about-container">
    <h1>This is an demo image widget page</h1>
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
  height: 90vh;
  display: flex;
  flex-direction: column;
}
.back-button{
padding-top: 50px;
  
}
</style>
