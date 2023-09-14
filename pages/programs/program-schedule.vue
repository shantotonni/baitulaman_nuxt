<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark" style="font-size: 3rem">Program Schedule</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Program Schedule</li>
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
          <h1 class="display-3" style="">Program Schedule</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <h2>Regular programs</h2>
            <p>We regularly add new classes, please visit the mosque for the latest offering.</p>
            <br>

            <p style="font-weight: bold">
              Note: The Schedule Can Change At Any Time. Please Contact Us Before Coming.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
export default {
  name: "programs-schedule.vue",
  auth:false,
  head() {
    return {
      title: "Program Schedule | Baitul Aman"
    };
  },
}
</script>

<style scoped>

</style>
