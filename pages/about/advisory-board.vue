<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark">Advisory Board</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Advisory Board</li>
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
          <h1 class="display-3" style="">Advisory Board</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <p>
              Baitul Aman Islamic Society is happy to announce the formation of an advisory board for future directions of the society.
              Following honourable community members have kindly agreed to sit in the advisory board:
            </p>
            <br>
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
  name: "advisory-board",
  auth:false,
  head() {
    return {
      title: "Advisory Board | Baitul Aman"
    };
  },
  data() {
    return {
      objectives: {},
    };
  },
  mounted() {
    document.title = 'Advisory Board | Baitul Aman';
    this.getAbout();
  },
  methods: {
    getAbout(){
      this.$axios.get( base_url + 'api/get-objectives').then((response)=>{
        this.objectives = response.data.objectives;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
