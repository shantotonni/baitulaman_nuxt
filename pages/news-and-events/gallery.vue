<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Media Gallery</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Media Gallery</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Blog Start -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <h1 class="display-3 mb-3 wow fadeIn" data-wow-delay="0.1s" style="font-size: 30px!important;">Media Gallery</h1>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-xl-4" v-for="(gallery, i) in galleries" :key="gallery.id" v-if="galleries.length">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img :src="image(gallery.image)" style="max-height: 330px;min-height: 315px" class="img-fluid w-100" alt="" v-if="gallery.video_status==='N'">
                <iframe width="420" height="315" :src="gallery.link" v-else></iframe>
              </div>
              <div style="padding: .5rem">
                <a href="" class="d-inline-block h4 lh-sm mb-3" style="font-weight: normal;font-size: 15px;">{{ gallery.title }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog End -->
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "gallery.vue",
  auth:false,
  head() {
    return {
      title: "Media Gallery | Baitul Aman"
    };
  },
  data() {
    return {
      galleries: [],
    };
  },
  mounted() {
    document.title = 'Media Gallery | Baitul Aman';
    this.getOurGallery();
  },
  methods: {
    getOurGallery(){
      this.$axios.get( base_url + 'api/get-our-gallery').then((response)=>{
        console.log(response)
        this.galleries = response.data.data;
      }).catch((error)=>{
      })
    },
    image(image){
      return base_url + "images/gallery/"+ image;
    },
    textTrunate(text){
      return text.substring(0,100)+ '.....';
    }
  },
}
</script>

<style scoped>

</style>
