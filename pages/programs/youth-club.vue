<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark" style="font-size: 3rem">Baitul Aman Youth Club</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Baitul Aman Youth Club</li>
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
          <h1 class="display-3" style="">Baitul Aman Youth Club</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
<!--            <h2>Regular programs</h2>-->
            <p v-html="youth_club.body"></p>
            <br>

<!--            <p style="font-weight: bold">-->
<!--              Note: The Schedule Can Change At Any Time. Please Contact Us Before Coming.-->
<!--            </p>-->
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
  name: "youth-club.vue",
  auth:false,
  head() {
    return {
      title: "Baitul Aman Youth Club | Baitul Aman"
    };
  },
  data() {
    return {
      youth_club: {},
    };
  },
  mounted() {
    document.title = 'Baitul Aman Youth Club | Baitul Aman';
    this.getYouthClub();
  },
  methods: {
    getYouthClub(){
      this.$axios.get( base_url + 'api/get-youth-club').then((response)=>{
        this.youth_club = response.data.youth_club;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
