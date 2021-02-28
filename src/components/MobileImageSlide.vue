/<template>
  <div>
    <div class="vueper-container imageslidesmall">
      <div class="vueper-inner-container">
        <vueper-slides :slide-ratio="1 / 4" autoplay :bullets="false">
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

export default {
  name: "MobileImageSlide",
  components: { VueperSlides, VueperSlide },
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
};
</script>

<style scoped>
.vueper-container {
  max-width: 78%;
  margin: auto;
  background-color: #ebebeb;
}
.imageslidesmall {
  padding-top: 20px;
}
</style>
