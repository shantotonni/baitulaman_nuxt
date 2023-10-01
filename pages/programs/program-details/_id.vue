<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark" style="font-size: 3rem">Programs</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Programs Details</li>
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
        <h1 class="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Program Details</h1>
        <div class="row g-4 justify-content-center">
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-12">
              <img :src="image(program.image)" class="img-fluid" alt="">
            </div>

            <div class="col-sm-12">
              <p v-html="program.description"></p>
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
  name: "program-details.vue",
  auth:false,
  head() {
    return {
      title: "Our Programs | Baitul Aman"
    }
  },
  data() {
    return {
      program: {},
    };
  },
  mounted() {
    document.title = 'Our Programs | Baitul Aman';
    this.programDetails();
  },
  methods: {
    programDetails() {
      this.$axios.get( base_url + 'api/get-program-details?id=' + this.$route.params.id).then((response)=>{
        this.program = response.data.details;
      }).catch((error)=>{
        console.log(error);
      })
    },
    image(image){
      return base_url + "images/program/"+ image;
    },
    textTruncate(text){
      return text.substring(0,100)+ '.....';
    }
  },
}
</script>

<style scoped>

</style>
