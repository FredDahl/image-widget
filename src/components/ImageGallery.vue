/<template>
  <div class="image-gallery-container">
    <GalleryItem
      class="gallery-item"
      title="Gallery Item 1"
      route="/about"
      imageName="galleryimg01.jpg"
    />
    <GalleryItem
      class="gallery-item"
      title="Gallery Item 2"
      route="/about"
      imageName="galleryimg02.jpg"
    />
    <GalleryItem
      class="gallery-item"
      title="Gallery Item 3"
      route="/about"
      imageName="galleryimg03.jpg"
    />
    <GalleryItem
      class="gallery-item"
      title="Gallery Item 4"
      route="/about"
      imageName="galleryimg04.jpg"
    />
    <GalleryItem
      class="gallery-item"
      title="Gallery Item 5"
      route="/about"
      imageName="galleryimg05.jpg"
    />
    <GalleryItem
      class="gallery-item"
      title="Gallery Item 6"
      route="/about"
      imageName="galleryimg06.jpg"
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
      parentDivSize: Number,
    };
  },
  computed: {},
};
</script>

<style scoped>
.image-gallery-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  padding: 0 20px 0 20px;
}
.gallery-item-1 {
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-2 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-3 {
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-4 {
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
}
.gallery-item-5 {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}
.gallery-item-6 {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
}
</style>
