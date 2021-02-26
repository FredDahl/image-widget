/<template>
  <div class="image-gallery-container">
    <button class="btn-style btn-right">
      <p>&#62;</p>
    </button>
    <button class="btn-style btn-left">
      <p>&#60;</p>
    </button>
    <GalleryItem
      class="gallery-item-1"
      title="Gallery Item 1"
      route="/about"
      imageName="galleryimg01.jpg"
      likes="546"
      description="Motorbåt"
    />
    <GalleryItem
      class="gallery-item-2"
      title="Gallery Item 2"
      route="/about"
      imageName="galleryimg02.jpg"
      likes="496"
      description="Segelbåt"
    />
    <GalleryItem
      class="gallery-item-3"
      title="Gallery Item 3"
      route="/about"
      imageName="galleryimg03.jpg"
      likes="723"
      description="Segelbåt"
    />
    <GalleryItem
      class="gallery-item-4"
      title="Gallery Item 4"
      route="/about"
      imageName="galleryimg04.jpg"
      likes="248"
      description="Motorbåt"
    />
    <GalleryItem
      class="gallery-item-5"
      title="Gallery Item 5"
      route="/about"
      imageName="galleryimg05.jpg"
      likes="539"
      description="Segelbåt"
    />
    <GalleryItem
      class="gallery-item-6"
      title="Gallery Item 6"
      route="/about"
      imageName="galleryimg06.jpg"
      likes="423"
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
      // parentDivSize: Number,
    };
  },
  computed: {},
};
</script>

<style scoped>
.image-gallery-container {
  height: 100%;
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 1fr 0.1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  padding: 10px 0 10px 0;
  background-color: #ebebeb;
}
.gallery-item-1 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-2 {
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-3 {
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
}
.gallery-item-4 {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}
.gallery-item-5 {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
}
.gallery-item-6 {
  grid-column: 4 / span 1;
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
}
.btn-style:hover {
  border: 1px solid black;
}
.btn-right {
  grid-column: 5 / span 1;
  grid-row: 1 / span 2;
}
.btn-left {
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
}
</style>
