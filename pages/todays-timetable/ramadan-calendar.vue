<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Ramadan Calendar</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Ramadan Calendar</li>
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
          <h1 class="display-3">Ramadan Calendar</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-12" style="text-align: center">
          <img :src="image(ramadan_calendar.image)" class="img-fluid" alt="">
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
  name: "ramadan-calendar.vue",
  auth:false,
  head() {
    return {
      title: "Ramadan Calendar | Baitul Aman"
    };
  },
  data() {
    return {
      ramadan_calendar: {},
    };
  },
  mounted() {
    document.title = 'Ramadan Calendar | Baitul Aman';
    this.getPages();
  },
  methods: {
    getPages(){
      this.$axios.get( base_url + 'api/get-ramadan-calendar').then((response)=>{
        this.ramadan_calendar = response.data.ramadan_calendar;
        //console.log(response);
      }).catch((error)=>{
      })
    },
    image(image){
      return base_url + "images/ramadan/"+ image;
    }
  },
}
</script>

<style scoped>

</style>
