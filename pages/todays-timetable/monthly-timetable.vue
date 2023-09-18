<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark" style="font-size: 3rem">Our Appeal</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Our Appeal</li>
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
          <h1 class="display-3">Our Appeal</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <p class="mb-0" style="font-weight: bold">“Whoever builds a mosque for Allah, then Allah will build for him a house like it in Paradise”
              <span style="font-weight: normal">[Sahih Bukhari]</span>
            </p>
            <br>
            <p>
              Building a mosque can also be an act of Sadaqah Jariyah for you or your loved ones.
              Your donation can earn continuous reward as it is providing an essential pillar of the Islamic community for generations to come.
            </p>
            <p>
              Contributing towards building a mosque is a sacred act in itself. Mosques have high importance in Islam and is the heart of the local community.
              With many people benefiting from the daily worship facilities, educational programmes and special occasion services, there is much more to a mosque than congregational prayers.
              A mosque can act as a hub for the local community, teaching people about Islam and supporting their spiritual growth.
            </p>
            <p style="font-weight: bold">
              “When a person dies, his deeds come to an end, except for three:
              ongoing charity (Sadaqah Jariyah), knowledge that is benefited from, and a righteous child who prays for him.” <span style="font-weight: normal">(Sahih Muslim)</span>
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
  name: "our-appeal.vue",
  auth:false,
  head() {
    return {
      title: "Our Appeal | Baitul Aman"
    };
  },
}
</script>

<style scoped>

</style>
