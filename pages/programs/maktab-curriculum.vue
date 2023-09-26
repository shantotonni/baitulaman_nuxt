<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">{{ pages.title }}</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">{{ pages.title }}</li>
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
          <h1 class="display-3" style="">{{ pages.title }}</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <p v-html="pages.body"></p>
            <br>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
import axios from 'axios';
import {base_url} from "~/plugins/base_url";
export default {
  name: "maktab-curriculum.vue",
  auth:false,
  head() {
    return {
      title: this.pages.title + " | Baitul Aman"
    };
  },
  data() {
    return {
      pages: {},
      slug: 'maktab-curriculum'
    };
  },
  mounted() {
    this.getPages();
    document.title = this.pages.title + '| Baitul Aman';
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

</style>
