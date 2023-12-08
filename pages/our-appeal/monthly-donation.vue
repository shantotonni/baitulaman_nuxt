<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Monthly Donation</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Monthly Donation</li>
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
          <h1 class="display-3">Monthly Donation</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <p class="mb-0" style="font-weight: bold">We greatly appreciate receiving a monthly donation to help us keep the mosque up and running by paying our rent, utility bills, and other expenses.</p>
            <br>
           <div>
             <p>* <span style="font-weight: bold">Cash/Check</span>: please visit us at our mosque.</p>
             <p>* <span style="font-weight: bold">e-transfer</span>: send us money to baitulamanyeg@gmail.com from any Canadian bank.</p>
             <p>* <span style="font-weight: bold">Credit Card</span>: Donate using a credit card by filling up the form below:</p>
           </div>
            <br>
            <nuxt-link to="/donate" class="btn btn-primary btn-lg btn-block" style="display: block">Donate</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
export default {
  name: "one-time-donation",
  auth:false,
  head() {
    return {
      title: "Monthly Donation | Baitul Aman"
    };
  },
}
</script>

<style scoped>

</style>
