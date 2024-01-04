<template>
<div>
  <!-- Hero Start -->
  <div class="container-fluid hero-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="hero-header-inner animated zoomIn">
            <h1 class="text-dark">By Law</h1>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="breadcrumb-item text-dark" aria-current="page">By Law</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero End -->


  <!-- Contact Start -->
  <div class="container-fluid contact py-5">
    <div class="container py-5">
      <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
        <h1 class="display-3" style="">By Law</h1>
      </div>
      <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
        <div class="col-sm-12">
          <div v-if="pages">
            <div id="pdf-container">
              <embed src="https://www.baitulamanedmonton.ca/assets/pdf/by_law.pdf" type="application/pdf" width="100%" height="100%">
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
export default {
  name: "about.vue",
  auth:false,
  head() {
    return {
      title: "By Law | Baitul Aman"
    };
  },
  data() {
    return {
      pages: {},
      slug: 'by-law',
    };
  },
  mounted() {
    document.title = 'By Law | Baitul Aman';
    this.getPages();
  },
  methods: {
    getPages(){
      this.$axios.get( base_url + 'api/get-pages?slug=' + this.slug).then((response)=>{
        this.pages = response.data.pages;
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>
.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}
#pdf-container {
  /*width: 300px;*/
  height: 1000px;
  /*position: absolute;*/
  /*top: 500px;*/
  /*left: 500px;*/
}

#pdf-controls {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style>
