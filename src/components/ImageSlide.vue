/<template>
  <div class="vueper-container">
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
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ImageSlide",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    // slidesTimeTimerId: null,
    slides: [
      {
        title: "",
        content: "",
        image: require("@/assets/images/img01.jpg"),
      },
      {
        title: "",
        content: "",
        image: require("@/assets/images/img02.jpg"),
      },
      {
        title: "",
        content: "",
        image: require("@/assets/images/img03.jpg"),
      },
    ],
  }),
};
</script>

<style scoped>
.vueper-container {
  background-color: #ebebeb;
}
/*  // fixed-height="true" */
/* .vueperslides--fixed-height {
  height: 50vh;
} */
</style>
