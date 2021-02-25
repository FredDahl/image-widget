/<template>
  <div class="image-gallery-container">
    <GalleryItem class="gallery-item-1" title="Gallery Item 1" route="/about" />
    <GalleryItem class="gallery-item-2" title="Gallery Item 2" route="/about" />
    <GalleryItem class="gallery-item-3" title="Gallery Item 3" route="/about" />
    <GalleryItem class="gallery-item-4" title="Gallery Item 4" route="/about" />
    <GalleryItem class="gallery-item-5" title="Gallery Item 5" route="/about" />
    <GalleryItem class="gallery-item-6" title="Gallery Item 6" route="/about" />
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";

export default {
  name: "ImageGallery",
  components: {
    GalleryItem,
  },
};
</script>

<style scoped>
.image-gallery-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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
