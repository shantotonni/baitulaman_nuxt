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
                <a href="http://wa.me/+8801553717992" class="text-secondary"><span>+000 0000 000</span></a>
              </div>
              <div class="h-100 d-inline-flex align-items-center">
                <span class="far fa-envelope me-2 text-dark"></span>
                <a href="#" class="text-secondary"><span>info@example.com</span></a>
              </div>
            </div>
            <div class="col-lg-5 text-end">
              <div class="h-100 d-inline-flex align-items-center">
                <span class="text-body">Follow Us:</span>
                <a class="text-dark px-2" href="https://www.facebook.com/groups/572986523475842/"><i class="fab fa-facebook-f"></i></a>
<!--                <a class="text-dark px-2" href=""><i class="fab fa-twitter"></i></a>
                <a class="text-dark px-2" href=""><i class="fab fa-linkedin-in"></i></a>
                <a class="text-dark px-2" href=""><i class="fab fa-instagram"></i></a>-->
                <nuxt-link v-show="$auth.loggedIn === false" class="text-body ps-4" to="/login"><i class="fa fa-lock text-dark me-1"></i> Signup/login</nuxt-link>
                <nuxt-link v-show="$auth.loggedIn === true" class="text-body ps-4" to="/customer/profile"><i class="bi bi-person text-dark me-1"></i> Profile</nuxt-link>
                <a style="color: red!important;" v-show="$auth.loggedIn === true" @click="logout" class="text-body ps-4"><i class="bi bi-box-arrow-left text-dark me-1"></i> Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <nav class="navbar navbar-light navbar-expand-lg py-3">
          <nuxt-link to="/" class="navbar-brand">
            <img src="/assets/img/logo/logo.png" alt="" style="width: 155px;">
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
                  <nuxt-link :to="`/our-appeal${menu.url}`" class="dropdown-item" v-for="(menu , index) in menus" :key="index">{{ menu.name }}</nuxt-link>
<!--                  <nuxt-link to="/our-appeal" class="dropdown-item">Our Appeal</nuxt-link>-->
<!--                  <nuxt-link to="/our-appeal/one-time-donation" class="dropdown-item">One time</nuxt-link>-->
<!--                  <nuxt-link to="/our-appeal/monthly-donation" class="dropdown-item">Monthly</nuxt-link>-->
<!--                  <nuxt-link to="/our-appeal/sponsor-an-ifter" class="dropdown-item">Sponsor an Iftar</nuxt-link>-->
<!--                  <nuxt-link to="/our-appeal/zakat-al-fitr-fitra" class="dropdown-item">Zakat Al-Fitr (Fitra)</nuxt-link>-->
<!--                  <nuxt-link to="/our-appeal/zakat-al-mal" class="dropdown-item">Zakat Al-Mal</nuxt-link>-->
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">News & Events</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/news-and-events" class="dropdown-item">News & Events</nuxt-link>
                  <nuxt-link to="/news-and-events/blog" class="dropdown-item">Blog</nuxt-link>
                  <nuxt-link to="/news-and-events/gallery" class="dropdown-item">Gallery</nuxt-link>
<!--                  <nuxt-link to="/news-and-events/events" class="dropdown-item"></nuxt-link>-->
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
                  <nuxt-link to="/add-registration-for-maktab" class="dropdown-item">Maktab Registration</nuxt-link>
                  <nuxt-link to="/apply-for-membership" class="dropdown-item">Apply For Membership</nuxt-link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Meet bais</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/about" class="dropdown-item">About</nuxt-link>
                  <nuxt-link to="/about/by-law" class="dropdown-item">By Law</nuxt-link>
                  <nuxt-link to="/about/objective" class="dropdown-item">Objective</nuxt-link>
                  <nuxt-link to="/about/advisory-board" class="dropdown-item">Founding Members</nuxt-link>
                  <nuxt-link to="/about/shura-committee" class="dropdown-item">Shura Committee</nuxt-link>
                  <nuxt-link to="/about/sub-committee" class="dropdown-item">Sub Committee</nuxt-link>
                  <nuxt-link to="/our-imam" class="dropdown-item">Our Imam</nuxt-link>
                  <nuxt-link to="/our-imam/ask-imam" class="dropdown-item">Ask The Imam</nuxt-link>
                  <nuxt-link to="/our-imam/ask-board" class="dropdown-item">Ask The Board</nuxt-link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Prayer Timetable</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link to="/todays-timetable" class="dropdown-item">Today`s Timetable</nuxt-link>
<!--                  <nuxt-link to="/todays-timetable/monthly-timetable" class="dropdown-item">Monthly Timetable</nuxt-link>-->
                  <nuxt-link to="/todays-timetable/ramadan-calendar" class="dropdown-item">Ramadan Calendar</nuxt-link>
                </div>
              </div>

<!--              <nuxt-link to="/about" class="nav-item nav-link">About</nuxt-link>-->
            </div>
            <nuxt-link to="/donate" class="btn btn-success py-2 px-4 d-none d-xl-inline-block">Donate</nuxt-link>
          </div>
        </nav>
      </div>
    </div>
    <!-- Topbar End -->

  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "Header",
  data(){
    return {
      menus: []
    }
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    getMenu(){
      this.$axios.get( base_url + 'api/get-frontend-menu').then((response)=>{
        console.log(response)
        this.menus = response.data.menus;
      }).catch((error)=>{
      })
    },
    logout(){
      this.$auth.logout();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
