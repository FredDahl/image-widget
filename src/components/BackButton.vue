<template>
  <div>
    <router-link :to="this.route">
      <div class="tooltip">
        <span class="tooltiptext">to the paradise city...</span>
        <button class="btn-style">
          Take me back
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackButton",
  data() {
    return {};
  },
  props: {
    route: String,
  },
};
</script>

<style scoped>
.btn-style {
  width: 200px;
  height: 60px;
  cursor: pointer;
}
.btn-style:hover {
  color: #42b983;
}
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #ebebeb;
  color: #242424;
  text-align: center;
  border-radius: 5px;
  padding: 8px 0;
  font-size: 12px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  transform: translate(208px);
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
