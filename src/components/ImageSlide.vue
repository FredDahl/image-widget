/<template>
  <div>
    <ScreenSizeCalc />
    <div
      class="vueper-container"
      :class="{ imageslidesmall: this.getIsSmallDevice }"
    >
      <div class="vueper-inner-container">
        <vueper-slides :slide-ratio="1 / 4" autoplay bullets-outside>
          <vueper-slide
            slide-image-inside
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
          />
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import ScreenSizeCalc from "@/components/ScreenSizeCalc.vue";
import { mapGetters } from "vuex";

export default {
  name: "ImageSlide",
  components: { VueperSlides, VueperSlide, ScreenSizeCalc },
  data: () => ({
    // slidesTimeTimerId: null,
    slides: [
      {
        title: "",
        content: "",
        image: require("@/assets/images/covers/img01.jpg"),
      },
      {
        title: "",
        content: "",
        image: require("@/assets/images/covers/img02.jpg"),
      },
      {
        title: "",
        content: "",
        image: require("@/assets/images/covers/img03.jpg"),
      },
    ],
  }),
  computed: {
    ...mapGetters(["getIsSmallDevice"]),
  },
};
</script>

<style scoped>
.vueper-container {
  max-width: 92%;
  margin: auto;
  background-color: #ebebeb;
}
.imageslidesmall {
  max-width: 75%;
  padding-top: 20px;
}
</style>
