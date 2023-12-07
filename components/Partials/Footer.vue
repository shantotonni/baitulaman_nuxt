<template>
  <div>
    <!-- Footer Start -->
    <div class="container-fluid footer pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-4 footer-inner">
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="footer-item mt-5">
              <h4 class="text-light mb-4">THE<span class="text-primary">Mosque</span></h4>
              <p class="mb-4 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
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
            Designed By <a class="border-bottom" href="https://www.linkedin.com/in/shojib-islam-057189137/">Sentu</a>
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

</style>
