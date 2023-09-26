<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Our Appeal</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Our Appeal</li>
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
          <h1 class="display-3">Our Appeal</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <div v-if="pages">
              <p v-html="pages.body"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "our-appeal.vue",
  auth:false,
  head() {
    return {
      title: "Our Appeal | Baitul Aman"
    };
  },
  data() {
    return {
      pages: {},
      slug: 'our-appeal'
    };
  },
  mounted() {
    document.title = 'Our Appeal | Baitul Aman';
    this.getPages();
  },
  methods: {
    getPages(){
      this.$axios.get( base_url + 'api/get-pages?slug=' + this.slug).then((response)=>{
        this.pages = response.data.pages;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
