<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark">Volunteer</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Volunteer</li>
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
<!--          <p class="fs-5 text-uppercase text-primary">Get In Touch</p>-->
          <h1 class="display-3">Volunteer</h1>
          <p class="mb-0">Do you want to make a positive contribution? Volunteers play a vital role in our organization's growth.</p>
          <p class="mb-0">If you are interested in becoming a volunteer with us, we'd like to learn a little more about you.</p>
        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-6">
            <input type="text" class="form-control bg-transparent p-3" placeholder="Your Name (required)">
          </div>
          <div class="col-sm-6">
            <input type="email" class="form-control bg-transparent p-3" placeholder="Your Email (required)">
          </div>
          <div class="col-12">
            <textarea class="w-100 form-control bg-transparent p-3" rows="6" cols="10" placeholder="Your comment or message (required)"></textarea>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-primary border-0 py-3 px-5" type="button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
export default {
  name: "contact.vue",
  auth:false,
  head() {
    return {
      title: "Contact | Market Exchange"
    };
  },
}
</script>

<style scoped>

</style>
