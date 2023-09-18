<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark" style="font-size: 3rem">Events</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Events</li>
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
          <h1 class="display-3">Events</h1>
        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <p class="mb-0" style="font-weight: bold">
              Welcome to our Events section. Here you can find the highlights of the most recent Events organized by our Mosque.
              You can find a complete list of current and past news on the official Facebook <a href="https://www.facebook.com/baisYEG" target="_blank">page</a> and on the
              <a target="_blank" href="https://www.facebook.com/groups/572986523475842/">group</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->

    <!-- Events Start -->
    <div class="container-fluid event py-5">
      <div class="container py-5">
        <h1 class="display-3 wow fadeIn" data-wow-delay="0.1s">Upcoming <span class="text-primary">Events</span></h1>
        <div class="row g-4 event-item wow fadeIn" data-wow-delay="0.1s" v-for="(event, i) in events" :key="event.id" v-if="events.length">
          <div class="col-3 col-lg-2 pe-0">
            <div class="text-center border-bottom border-dark py-3 px-2">
              <h6>{{ event.event_date }}</h6>
              <p class="mb-0">Fri 06:55</p>
            </div>
          </div>
          <div class="col-9 col-lg-6 border-start border-dark">
            <div class="ms-3">
              <h4 class="mb-3">{{ event.title }}</h4>
              <p class="mb-4" v-html="event.description"></p>
<!--              <a href="#" class="btn btn-primary px-3">Join Now</a>-->
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="overflow-hidden mb-5">
              <img :src="image(event.image)" class="img-fluid w-100" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Events End -->
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "events.vue",
  auth:false,
  head() {
    return {
      title: "Events | Baitul Aman"
    };
  },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    document.title = 'Events | Baitul Aman';
    this.getOurEvents();
  },
  methods: {
    getOurEvents(){
      this.$axios.get( base_url + 'api/get-our-events').then((response)=>{
        this.events = response.data.events;
      }).catch((error)=>{
      })
    },
    image(image){
      return base_url + "images/event/"+ image;
    },
    textTrunate(text){
      return text.substring(0,100)+ '.....';
    }
  },
}
</script>

<style scoped>

</style>
