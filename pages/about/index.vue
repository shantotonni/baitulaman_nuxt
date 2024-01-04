<template>
<div>
  <!-- Hero Start -->
  <div class="container-fluid hero-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="hero-header-inner animated zoomIn">
            <h1 class="text-dark">About Us</h1>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="breadcrumb-item text-dark" aria-current="page">About</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero End -->

  <!-- About Satrt -->
  <div class="container-fluid about py-3" style="background: #f3f2f2">
    <div class="container py-3">
      <div class="row g-5">
        <!--            <div class="col-xl-6">-->
        <!--              <img src="/assets/img/about.jpg" style="height: 100%" class="img-fluid pb-3 wow zoomIn" data-wow-delay="0.1s" alt="">-->
        <!--            </div>-->
        <div class="col-xl-12 wow fadeIn" data-wow-delay="0.5s">
          <p class="fs-5 text-uppercase text-primary">About THE Mosque</p>
          <h1 class="display-5 pb-4 m-0">Allah Help Those Who Help Themselves</h1>
          <p class="pb-4">Come join the Baitul Aman Islamic Society for some amazing times in Edmonton, AB! Enjoy prayers, Fridays at the mosque, special Ramadan events, delicious Iftar meals, Quran classes,
            fun discussions, and great social gatherings. It's all happening – be part of the excitement with us!</p>
          <div class="row g-4 mb-4">
            <div class="col-md-6">
              <div class="ps-3 d-flex align-items-center justify-content-start">
                <span class="bg-primary btn-md-square rounded-circle mt-4 me-2"><i class="fa fa-eye text-dark fa-4x mb-5 pb-2"></i></span>
                <div class="ms-4">
                  <h5>Our Vision</h5>
                  <p>To become a vibrant and inclusive hub of Islamic spirituality, education, and community engagement, where the BAIS mosque in Edmonton stands as a beacon of unity, fostering knowledge, compassion, and enduring connections within the Muslim community and beyond.
                    Our long-term vision is to establish a complete mosque that serves as a symbol of enduring charity, leaving a lasting legacy for generations to come.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="ps-3 d-flex align-items-center justify-content-start">
                <span class="bg-primary btn-md-square rounded-circle mt-4 me-2"><i class="fa fa-flag text-dark fa-4x mb-5 pb-2"></i></span>
                <div class="ms-4">
                  <h5>Our Mission</h5>
                  <p>BAIS, a registered non-profit organization in Alberta, is dedicated to educational, religious, and social purposes, emphasizing a moderate understanding of Islam.
                    Its mission involves fostering community engagement, providing educational programs, and enhancing the moral and social well-being of Muslims in Edmonton while advancing the cause of Islam as a complete way of life.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-light p-3 mb-4">
            <div class="row align-items-center justify-content-center">
              <div class="col-3">
                <img src="/assets/img/about-child.jpg" class="img-fluid rounded-circle" alt="">
              </div>
              <div class="col-6">
                <p class="mb-0">Unity in Faith, Education for Life: BAIS, Nurturing Communities, Fostering Knowledge.</p>
              </div>
            </div>
          </div>
          <div class="row g-2" style="padding-bottom: 50px">
            <div class="col-md-6">
              <p class="mb-2"><i class="fa fa-check text-primary me-3"></i>Evening School for Children</p>
              <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>Arabic Beginners for Adults</p>
              <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>Marriage Services</p>
            </div>
            <div class="col-md-6">
              <p class="mb-2"><i class="fa fa-check text-primary me-3"></i>Islamic Counselling</p>
              <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>Seniors Program</p>
              <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>Da’wa program</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "about.vue",
  auth:false,
  head() {
    return {
      title: "About | Baitul Aman"
    };
  },
  data() {
    return {
      pages: {},
      slug: 'about'
    };
  },
  mounted() {
    document.title = 'About | Baitul Aman';
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
