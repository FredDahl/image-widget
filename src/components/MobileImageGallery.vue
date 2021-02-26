/<template>
  <div class="image-gallery-container">
    <button v-on:click="btnhandler(++pageview)" class="btn-style btn-right">
      <p>&#62;</p>
    </button>
    <button v-on:click="btnhandler(--pageview)" class="btn-style btn-left">
      <p>&#60;</p>
    </button>
    <GalleryItem
      v-if="pageview == 1"
      class="gallery-item-1"
      title="Gallery Item 1"
      route="/about"
      imageName="galleryimg01.jpg"
      likes="546"
      description="Motorbåt"
    />
    <GalleryItem
      v-if="pageview == 1"
      class="gallery-item-2"
      title="Gallery Item 2"
      route="/about"
      imageName="galleryimg02.jpg"
      likes="496"
      description="Segelbåt"
    />
    <GalleryItem
      v-if="pageview == 2"
      class="gallery-item-3"
      title="Gallery Item 3"
      route="/about"
      imageName="galleryimg03.jpg"
      likes="723"
      description="Segelbåt"
    />
    <GalleryItem
      v-if="pageview == 2"
      class="gallery-item-4"
      title="Gallery Item 4"
      route="/about"
      imageName="galleryimg04.jpg"
      likes="248"
      description="Motorbåt"
    />
    <GalleryItem
      v-if="pageview == 3"
      class="gallery-item-5"
      title="Gallery Item 5"
      route="/about"
      imageName="galleryimg05.jpg"
      likes="539"
      description="Segelbåt"
    />
    <GalleryItem
      v-if="pageview == 3"
      class="gallery-item-6"
      title="Gallery Item 6"
      route="/about"
      imageName="galleryimg06.jpg"
      likes="423"
      description="Motorbåt"
    />
    <GalleryItem
      v-if="pageview == 4"
      class="gallery-item-1"
      title="Gallery Item 7"
      route="/about"
      imageName="galleryimg07.jpg"
      likes="736"
      description="Motorbåt"
    />
    <GalleryItem
      v-if="pageview == 4"
      class="gallery-item-2"
      title="Gallery Item 8"
      route="/about"
      imageName="galleryimg08.jpg"
      likes="596"
      description="Segelbåt"
    />
    <GalleryItem
      v-if="pageview == 5"
      class="gallery-item-3"
      title="Gallery Item 9"
      route="/about"
      imageName="galleryimg09.jpg"
      likes="723"
      description="Segelbåt"
    />
    <GalleryItem
      v-if="pageview == 5"
      class="gallery-item-4"
      title="Gallery Item 10"
      route="/about"
      imageName="galleryimg10.jpg"
      likes="687"
      description="Motorbåt"
    />
    <GalleryItem
      v-if="pageview == 6"
      class="gallery-item-5"
      title="Gallery Item 11"
      route="/about"
      imageName="galleryimg11.jpg"
      likes="423"
      description="Motorbåt"
    />
    <GalleryItem
      v-if="pageview == 6"
      class="gallery-item-6"
      title="Gallery Item 12"
      route="/about"
      imageName="galleryimg12.jpg"
      likes="742"
      description="Motorbåt"
    />
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";

export default {
  name: "ImageGallery",
  components: {
    GalleryItem,
  },
  data() {
    return {
      pageview: 1,
    };
  },
  methods: {
    btnhandler(e) {
      this.pageview = e;
    },
  },
  watch: {
    pageview: function(val) {
      switch (val) {
        case 0:
          this.pageview = 6;
          break;
        case 1:
          this.pageview = 1;
          break;
        case 2:
          this.pageview = 2;
          break;
        case 3:
          this.pageview = 3;
          break;
        case 4:
          this.pageview = 4;
          break;
        case 5:
          this.pageview = 5;
          break;
        case 6:
          this.pageview = 6;
          break;
        case 7:
          this.pageview = 1;
          break;
      }
    },
  },
};
</script>

<style scoped>
.image-gallery-container {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  background-color: #ebebeb;
}
.gallery-item-1 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-2 {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}
.btn-style {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
}
.btn-style p {
  font-size: 3.2vw;
  transform: scaleY(2);
  transform-origin: 0 0;
  color: #dcdcdc;
}
.btn-style:hover {
  border: 1px solid black;
}
.btn-right {
  grid-column: 3 / span 1;
  grid-row: 1 / span 2;
}
.btn-left {
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
}
</style>
