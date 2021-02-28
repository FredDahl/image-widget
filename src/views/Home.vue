<template>
  <div class="home-container">
    <ScreenSizeCalc />
    <div class="home-grid-container">
      <div class="image-slide-container">
        <ImageSlide class="image-slide" :class="{ hidden: this.getIsSmallDevice}" />
        <MobileImageSlide class="image-slide" :class="{ hidden: !this.getIsSmallDevice }" />
      </div>
      <div class="image-gallery-container">
        <div :class="{ hidden: this.getIsSmallDevice }">
          <ImageGallery />
        </div>
        <div :class="{ hidden: !this.getIsSmallDevice }">
          <MobileImageGallery />
        </div>
      </div>
    </div>
    <div class="footer" :class="{ mobilefooter: this.getIsSmallDevice }">
      <div class="footer-icon-container">
        <div
          class="footer-icon"
          :class="{ mobilefootericon: this.getIsSmallDevice }"
        >
          <a href="https://www.facebook.com/" target="_blank">
            <svg
              width="112.196"
              height="112.196"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <title>Layer 1</title>
                <g id="svg_1">
                  <circle
                    id="svg_2"
                    fill="#3B5998"
                    r="56.098"
                    cy="56.098"
                    cx="56.098"
                  />
                  <path
                    id="svg_3"
                    fill="#FFFFFF"
                    d="m70.201,58.294l-10.01,0l0,36.672l-15.166,0l0,-36.672l-7.213,0l0,-12.888l7.213,0l0,-8.34c0,-5.964 2.833,-15.303 15.301,-15.303l11.234,0.047l0,12.51l-8.151,0c-1.337,0 -3.217,0.668 -3.217,3.513l0,7.585l11.334,0l-1.325,12.876z"
                  />
                </g>
                <g id="svg_4" />
                <g id="svg_5" />
                <g id="svg_6" />
                <g id="svg_7" />
                <g id="svg_8" />
                <g id="svg_9" />
                <g id="svg_10" />
                <g id="svg_11" />
                <g id="svg_12" />
                <g id="svg_13" />
                <g id="svg_14" />
                <g id="svg_15" />
                <g id="svg_16" />
                <g id="svg_17" />
                <g id="svg_18" />
              </g>
            </svg>
          </a>
        </div>
        <div
          class="footer-icon"
          :class="{ mobilefootericon: this.getIsSmallDevice }"
        >
          <a href="https://twitter.com/" target="_blank">
            <svg
              width="112.197"
              height="112.197"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <title>Layer 1</title>
                <g id="svg_1">
                  <circle
                    id="svg_2"
                    fill="#55ACEE"
                    r="56.098"
                    cy="56.098"
                    cx="56.099"
                  />
                  <g id="svg_3">
                    <path
                      id="svg_4"
                      fill="#F1F2F2"
                      d="m90.461,40.316c-2.404,1.066 -4.99,1.787 -7.702,2.109c2.769,-1.659 4.894,-4.284 5.897,-7.417c-2.591,1.537 -5.462,2.652 -8.515,3.253c-2.446,-2.605 -5.931,-4.233 -9.79,-4.233c-7.404,0 -13.409,6.005 -13.409,13.409c0,1.051 0.119,2.074 0.349,3.056c-11.144,-0.559 -21.025,-5.897 -27.639,-14.012c-1.154,1.98 -1.816,4.285 -1.816,6.742c0,4.651 2.369,8.757 5.965,11.161c-2.197,-0.069 -4.266,-0.672 -6.073,-1.679c-0.001,0.057 -0.001,0.114 -0.001,0.17c0,6.497 4.624,11.916 10.757,13.147c-1.124,0.308 -2.311,0.471 -3.532,0.471c-0.866,0 -1.705,-0.083 -2.523,-0.239c1.706,5.326 6.657,9.203 12.526,9.312c-4.59,3.597 -10.371,5.74 -16.655,5.74c-1.08,0 -2.15,-0.063 -3.197,-0.188c5.931,3.806 12.981,6.025 20.553,6.025c24.664,0 38.152,-20.432 38.152,-38.153c0,-0.581 -0.013,-1.16 -0.039,-1.734c2.622,-1.89 4.895,-4.251 6.692,-6.94l0,0z"
                    />
                  </g>
                </g>
                <g id="svg_5" />
                <g id="svg_6" />
                <g id="svg_7" />
                <g id="svg_8" />
                <g id="svg_9" />
                <g id="svg_10" />
                <g id="svg_11" />
                <g id="svg_12" />
                <g id="svg_13" />
                <g id="svg_14" />
                <g id="svg_15" />
                <g id="svg_16" />
                <g id="svg_17" />
                <g id="svg_18" />
                <g id="svg_19" />
              </g>
            </svg>
          </a>
        </div>
        <div
          class="footer-icon"
          :class="{ mobilefootericon: this.getIsSmallDevice }"
        >
          <a href="https://linkedin.com" target="_blank">
            <svg
              width="112.196"
              height="112.196"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <title>Layer 1</title>
                <g id="svg_1">
                  <circle
                    id="svg_2"
                    fill="#007AB9"
                    r="56.098"
                    cy="56.097"
                    cx="56.098"
                  />
                  <g id="svg_3">
                    <path
                      id="svg_4"
                      fill="#F1F2F2"
                      d="m89.616,60.611l0,23.128l-13.409,0l0,-21.578c0,-5.418 -1.936,-9.118 -6.791,-9.118c-3.705,0 -5.906,2.491 -6.878,4.903c-0.353,0.862 -0.444,2.059 -0.444,3.268l0,22.524l-13.41,0c0,0 0.18,-36.546 0,-40.329l13.411,0l0,5.715c-0.027,0.045 -0.065,0.089 -0.089,0.132l0.089,0l0,-0.132c1.782,-2.742 4.96,-6.662 12.085,-6.662c8.822,0 15.436,5.764 15.436,18.149l0,0zm-54.96,-36.642c-4.587,0 -7.588,3.011 -7.588,6.967c0,3.872 2.914,6.97 7.412,6.97l0.087,0c4.677,0 7.585,-3.098 7.585,-6.97c-0.089,-3.956 -2.908,-6.967 -7.496,-6.967l0,0zm-6.791,59.77l13.405,0l0,-40.33l-13.405,0l0,40.33z"
                    />
                  </g>
                </g>
                <g id="svg_5" />
                <g id="svg_6" />
                <g id="svg_7" />
                <g id="svg_8" />
                <g id="svg_9" />
                <g id="svg_10" />
                <g id="svg_11" />
                <g id="svg_12" />
                <g id="svg_13" />
                <g id="svg_14" />
                <g id="svg_15" />
                <g id="svg_16" />
                <g id="svg_17" />
                <g id="svg_18" />
                <g id="svg_19" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-text" :class="{ hidden: this.getIsSmallDevice }">
        <p>
          This is an images gallery demo page.
        </p>
        <p>&#169; Fredrik Dahlström 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScreenSizeCalc from "@/components/ScreenSizeCalc.vue";
import ImageSlide from "@/components/ImageSlide.vue";
import MobileImageSlide from "@/components/MobileImageSlide.vue"
import ImageGallery from "@/components/ImageGallery.vue";
import MobileImageGallery from "@/components/MobileImageGallery.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { ScreenSizeCalc, ImageSlide, MobileImageSlide, ImageGallery, MobileImageGallery },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIsSmallDevice"]),
  },
};
</script>

<style scoped>
.home-container {
  height: 100vh;
  background-color: #ebebeb;
}
.home-grid-container {
  display: grid;
  grid-template-rows: 0.5fr 2fr;
  background-color: #ebebeb;
}
.image-slide-container {
  grid-row: 1 / span 1;
}
.image-gallery-container {
  grid-row: 2 / span 1;
}
.image-slide {
  padding-bottom: 30px;
}
.hidden {
  display: none !important;
}
.footer {
  /* position: relative; */
  height: 30vh;
  width: 100%;
  background-color: #424242;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.footer-icon-container {
  display: flex;
  flex-direction: row;
}
.footer-icon {
  transform: scale(0.5);
}
.footer-text p {
  max-width: 500px;
  color: white;
  padding-top: 60px;
}
.mobilefooter {
  background-color: #ebebeb;
  height: 10vh;
}
.mobilefootericon {
  padding-top: 10px;
  padding-bottom: 10px;
  transform: scale(0.3);
}
</style>
