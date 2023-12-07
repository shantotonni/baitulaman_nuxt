<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Visit Facebook</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Visit Facebook</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Contact Start -->
    <div class="container-fluid contact py-5">
      <div class="container">
        <div class="text-center mx-auto wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-3">Visit Facebook</h1>
        </div>
      </div>
    </div>
    <!-- Contact Start -->

    <!-- Blog Start -->
    <div class="container-fluid">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-xl-6">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img src="/assets/img/fpage.png" class="w-100" alt="" height="400">
              </div>
              <div class="p-4">
                <a href="https://www.facebook.com/baisYEG" target="_blank" class="d-inline-block h4 lh-sm mb-3">Visit our Facebook Page</a>
                <br>
                <a href="https://www.facebook.com/baisYEG" target="_blank" class="btn btn-primary px-3">Please Click</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-6">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img src="/assets/img/gpage.png" class="img-fluid w-100" alt="" height="400">
              </div>
              <div class="p-4">
                <a href="https://www.facebook.com/groups/572986523475842/" target="_blank" class="d-inline-block h4 lh-sm mb-3">Join our Facebook Group:</a>
                <br>
                <a href="https://www.facebook.com/groups/572986523475842/" target="_blank" class="btn btn-primary px-3">Please Click</a>
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
export default {
  name: "events.vue",
  auth:false,
  head() {
    return {
      title: "Events | Baitul Aman"
    };
  },
}
</script>

<style scoped>

</style>
