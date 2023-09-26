<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Our Imam</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Our Imam</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Team Start -->
    <div class="container-fluid team py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-3">Our Imam</h1>
          <p class="fs-5 text-uppercase text-primary">Our current Imam is {{ imam.name }}. Here is his short intro:</p>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-xl-5">
            <div class="team-img wow zoomIn" data-wow-delay="0.1s">
              <img :src="image(imam.image)" class="img-fluid" alt="">
            </div>
          </div>
          <div class="col-lg-8 col-xl-7">
            <div class="team-item wow fadeIn" data-wow-delay="0.1s">
              <h1>{{ imam.name }}</h1>
              <h5 class="fw-normal fst-italic text-primary mb-4">President</h5>
              <p class="mb-4" v-html="imam.description"></p>
              <div class="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                <a class="btn btn-primary btn-lg-square me-2" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-primary btn-lg-square me-2" href=""><i class="fab fa-twitter"></i></a>
                <a href="#" class="btn btn-primary btn-lg-square me-2"><i class="fab fa-instagram"></i></a>
                <a href="#" class="btn btn-primary btn-lg-square"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <!-- Team End -->
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "our-imam.vue",
  auth:false,
  head() {
    return {
      title: "Our Imam | Baitul Aman"
    };
  },
  data() {
    return {
      imam: {},
    };
  },
  mounted() {
    document.title = 'Our Imam | Baitul Aman';
    this.getImam();
  },
  methods: {
    getImam(){
      this.$axios.get( base_url + 'api/get-imam').then((response)=>{
        this.imam = response.data.imam;
      }).catch((error)=>{
      })
    },
    image(image){
      return base_url + "images/imam/"+ image;
    }
  },
}
</script>

<style scoped>

</style>
