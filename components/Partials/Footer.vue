<template>
  <div>
    <!-- Footer Start -->
    <div class="container-fluid footer wow fadeIn" data-wow-delay="0.1s" style="margin-top: 0;background: #092731">
      <div class="container">
        <div class="row g-4 footer-inner">
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="footer-item">
              <h4 class="text-light mb-4">THE<span class="text-primary"> Mosque</span></h4>
              <p class="mb-4 text-secondary">Come join the Baitul Aman Islamic Society for some amazing times in Edmonton, AB! Enjoy prayers, Fridays at the mosque, special Ramadan events, delicious Iftar meals,
                Quran classes, fun discussions, and great social gatherings. It's all happening – be part of the excitement with us!</p>
              <nuxt-link to="/donate" class="btn btn-primary py-2 px-4">Donate Now</nuxt-link>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="footer-item mt-5">
              <h4 class="text-light mb-4">Our Mosque</h4>
              <div class="d-flex flex-column">
                <h6 class="text-secondary mb-0">Our Address</h6>
                <div class="d-flex align-items-center border-bottom py-4">
                  <span class="flex-shrink-0 btn-square bg-primary me-3 p-4"><i class="fa fa-map-marker-alt text-dark"></i></span>
                  <a href="" class="text-body">Demo</a>
                </div>
                <h6 class="text-secondary mt-4 mb-0">Our Mobile</h6>
                <div class="d-flex align-items-center py-4">
                  <span class="flex-shrink-0 btn-square bg-primary me-3 p-4"><i class="fa fa-phone-alt text-dark"></i></span>
                  <a href="" class="text-body">+000 00 00000</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="footer-item mt-5">
              <h4 class="text-light mb-4">Explore Link</h4>
              <div class="d-flex flex-column align-items-start">
                <nuxt-link class="text-body mb-2" to="/"><i class="fa fa-check text-primary me-2"></i>Home</nuxt-link>
                <nuxt-link class="text-body mb-2" to="/about"><i class="fa fa-check text-primary me-2"></i>About Us</nuxt-link>
                <nuxt-link class="text-body mb-2" to="/contact-us"><i class="fa fa-check text-primary me-2"></i>Contact us</nuxt-link>
                <nuxt-link class="text-body mb-2" to="/donate"><i class="fa fa-check text-primary me-2"></i>Donations</nuxt-link>
                <nuxt-link class="text-body mb-2" to="/add-registration-for-maktab"><i class="fa fa-check text-primary me-2"></i>Add registration for Maktab</nuxt-link>
                <nuxt-link class="text-body mb-2" to="/apply-for-membership"><i class="fa fa-check text-primary me-2"></i>Apply For Membership</nuxt-link>
                <nuxt-link class="text-body mb-2" to="/mailing-list"><i class="fa fa-check text-primary me-2"></i>Mail Us</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-4">
        <div class="border-top border-secondary pb-4"></div>
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <nuxt-link class="border-bottom" to="/">Baitul Aman</nuxt-link>, All Right Reserved.
          </div>
          <div class="col-md-6 text-center text-md-end">
            Designed By <a class="border-bottom" href="https://apexstrive.ca/" target="_blank">Apex Strive Solutions Inc</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-primary border-3 border-light back-to-top"><i class="fa fa-arrow-up"></i></a>

  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {
     //
    }
  },
}
</script>

<style scoped>
  .text-body{
    color: white!important;
  }
  p{
    color: white!important;
  }
  h6{
    color: white!important;
  }
</style>
