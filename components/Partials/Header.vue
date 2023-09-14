<template>
  <div>
    <!-- Spinner Start -->
    <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
      <div class="spinner-grow text-primary" role="status"></div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar start -->
    <div class="container-fluid fixed-top">
      <div class="container topbar d-none d-lg-block">
        <div class="topbar-inner">
          <div class="row gx-0">
            <div class="col-lg-7 text-start">
              <div class="h-100 d-inline-flex align-items-center me-4">
                <span class="fa fa-phone-alt me-2 text-dark"></span>
                <a href="#" class="text-secondary"><span>+000 0000 000</span></a>
              </div>
              <div class="h-100 d-inline-flex align-items-center">
                <span class="far fa-envelope me-2 text-dark"></span>
                <a href="#" class="text-secondary"><span>info@example.com</span></a>
              </div>
            </div>
            <div class="col-lg-5 text-end">
              <div class="h-100 d-inline-flex align-items-center">
                <span class="text-body">Follow Us:</span>
                <a class="text-dark px-2" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="text-dark px-2" href=""><i class="fab fa-twitter"></i></a>
                <a class="text-dark px-2" href=""><i class="fab fa-linkedin-in"></i></a>
                <a class="text-dark px-2" href=""><i class="fab fa-instagram"></i></a>
                <a class="text-body ps-4" href=""><i class="fa fa-lock text-dark me-1"></i> Signup/login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <nav class="navbar navbar-light navbar-expand-lg py-3">
          <nuxt-link to="/" class="navbar-brand">
            <img src="/assets/img/logo/logo.png" alt="">
          </nuxt-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars text-primary"></span>
          </button>
          <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
            <div class="navbar-nav ms-lg-auto mx-xl-auto">
              <nuxt-link to="/" class="nav-item nav-link active">Home</nuxt-link>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Donation</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/our-appeal" class="dropdown-item">Our Appeal</nuxt-link>
                  <nuxt-link to="/our-appeal/one-time-donation" class="dropdown-item">One time</nuxt-link>
                  <nuxt-link to="/our-appeal/monthly-donation" class="dropdown-item">Monthly</nuxt-link>
                  <nuxt-link to="/our-appeal/sponsor-an-ifter" class="dropdown-item">Sponsor an Iftar</nuxt-link>
                  <nuxt-link to="/our-appeal/zakat-al-fitr-fitra" class="dropdown-item">Zakat Al-Fitr (Fitra)</nuxt-link>
                  <nuxt-link to="/our-appeal/zakat-al-mal" class="dropdown-item">Zakat Al-Mal</nuxt-link>
                  <nuxt-link to="/our-appeal/gofundme-com" class="dropdown-item">GoFundMe.com</nuxt-link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">News & Events</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/news-and-events/new" class="dropdown-item">News</nuxt-link>
                  <nuxt-link to="/news-and-events/events" class="dropdown-item">Events</nuxt-link>
                  <nuxt-link to="/news-and-events/visit-facebook" class="dropdown-item">Visit Facebook</nuxt-link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Programs</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/programs" class="dropdown-item">Our Programs</nuxt-link>
                  <nuxt-link to="/programs/program-schedule" class="dropdown-item">Program Schedule</nuxt-link>
                  <nuxt-link to="/programs/youth-club" class="dropdown-item">Youth Club</nuxt-link>
                  <nuxt-link to="/programs/maktab-curriculum" class="dropdown-item">Maktab Curriculum</nuxt-link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contact</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/contact-us" class="dropdown-item">Contact Us</nuxt-link>
                  <nuxt-link to="/mailing-list" class="dropdown-item">Mailing List</nuxt-link>
                  <nuxt-link to="/volunteer" class="dropdown-item">Volunteer</nuxt-link>
                </div>
              </div>
              <!--              <a href="activity.html" class="nav-item nav-link">Activities</a>-->
              <!--              <a href="event.html" class="nav-item nav-link">Events</a>-->
              <!--              <a href="sermon.html" class="nav-item nav-link">Sermons</a>-->
              <nuxt-link to="/about" class="nav-item nav-link">About</nuxt-link>
            </div>
            <a href="" class="btn btn-success py-2 px-4 d-none d-xl-inline-block">Donate</a>
          </div>
        </nav>
      </div>
    </div>
    <!-- Topbar End -->

  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      //
    }
  },
  methods: {
   //
  }
}
</script>

<style scoped>

</style>
