<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark" style="font-size: 3rem">Our Programs</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Our Programs</li>
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
        <h1 class="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Latest From <span class="text-primary">Our Programs</span></h1>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-xl-4" v-for="(program, i) in our_programs" :key="program.id" v-if="our_programs.length">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img :src="image(program.image)" style="max-height: 330px;min-height: 330px" class="img-fluid w-100" alt="">
              </div>
              <div class="p-4">
                <div class="blog-meta d-flex justify-content-between pb-2">
                  <div class="">
                    <small><i class="fas fa-user me-2 text-muted"></i><a href="" class="text-muted me-2">By Admin</a></small>
                  </div>
                  <div class="">
                    <a href=""><i class="fas fa-bookmark text-muted"></i></a>
                  </div>
                </div>
                <a href="" class="d-inline-block h4 lh-sm mb-3">{{ program.title }}</a>
                <p class="mb-4" v-html="textTruncate(program.description)"></p>
                <nuxt-link :to="`/programs/program-details/${program.id}`" class="btn btn-primary px-3">More Details</nuxt-link>
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
  name: "programs.vue",
  auth:false,
  head() {
    return {
      title: "Our Programs | Baitul Aman"
    }
  },
  data() {
    return {
      our_programs: [],
    };
  },
  mounted() {
    document.title = 'Our Programs | Baitul Aman';
    this.getOurProgram();
  },
  methods: {
    getOurProgram(){
      this.$axios.get( base_url + 'api/get-our-program').then((response)=>{
        this.our_programs = response.data.our_programs;
      }).catch((error)=>{
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
