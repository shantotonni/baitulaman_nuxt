<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Today’s Timetable</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Today’s Timetable</li>
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
          <h1 class="display-3">Today’s Timetable</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="row g-5">
            <div>
              <iframe id="iframe" title="prayerWidget" class="widget-m-top" style="height: 600px;width: 100%; border: 1px solid #ddd;" scrolling="no" src="https://time.my-masjid.com/salahscreen/d4c89c73-355e-4da5-95a2-f399bc4831b3"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
export default {
  name: "our-appeal.vue",
  auth:false,
  head() {
    return {
      title: "Today’s Timetable | Baitul Aman"
    };
  },
}
</script>

<style scoped>

</style>
