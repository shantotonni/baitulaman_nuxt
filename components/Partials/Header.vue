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
              <div class="nav-item dropdown" v-for="(menu , index) in menus">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ menu.name }}</a>
                <div class="dropdown-menu m-0 rounded-0">
                  <nuxt-link :to="`${sub.url}`" class="dropdown-item" v-for="(sub , index) in menu.sub_menu" :key="index">{{ sub.name }}</nuxt-link>
                </div>
              </div>
            </div>
            <nuxt-link to="/donate" class="btn btn-success py-2 px-4 d-none d-xl-inline-block">Donate</nuxt-link>
          </div>
        </nav>
      </div>
    </div>
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
