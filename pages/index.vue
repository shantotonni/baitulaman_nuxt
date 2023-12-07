<template>
    <div>
      <!-- Hero Start -->
      <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="hero-header-inner animated zoomIn">
                <p class="fs-4 text-dark" >WELCOME TO THEMosque</p>
                <h1 class="mb-5 text-dark">Purity Comes From Faith</h1>
                <nuxt-link to="/add-registration-for-maktab" class="btn btn-success py-3 px-5">Add registration for Maktab</nuxt-link>
                <nuxt-link to="/apply-for-membership" class="btn btn-success py-3 px-5">Apply For Membership</nuxt-link>
                <nuxt-link to="/mailing-list" class="btn btn-success py-3 px-5">Mail Us</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero End -->
      <div class="container-fluid about" v-if="announcementEnable">
        <div class="container py-5" style="padding-bottom: 0px!important;">
          <div class="container text-center py-5 wow fadeIn mb-5 demo" data-wow-delay="0.5s" style="padding-bottom: 0px!important;">
            <div class="row g-4 align-items-center">
              <div class="col-lg-2">
                <i class="fa fa-mosque fa-5x text-white"></i>
              </div>
              <div class="col-lg-10 text-center text-lg-start">
                <div v-if="announcement">
                  <h1 class="mb-0" style="color: white!important;font-size: 16px" v-html="announcement.body"></h1>
<!--                  <p v-html="pages.body"></p>-->
                </div>
              </div>
              <div class="col-lg-2">
                <!--                <nuxt-link to="/mailing-list" class="btn btn-light py-2 px-4">Mail Us</nuxt-link>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid about">
        <div class="container py-5">
          <div class="row g-5">
            <div>
              <iframe id="iframe" title="prayerWidget" class="widget-m-top" style="height: 890px;width: 100%; border: 1px solid #ddd;" scrolling="no" src="https://time.my-masjid.com/timingscreen/d4c89c73-355e-4da5-95a2-f399bc4831b3"></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- About Satrt -->
      <div class="container-fluid about py-5">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-xl-6">
              <img src="/assets/img/about.jpg" style="height: 100%" class="img-fluid pb-3 wow zoomIn" data-wow-delay="0.1s" alt="">
            </div>
            <div class="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="fs-5 text-uppercase text-primary">About THEMosque</p>
              <h1 class="display-5 pb-4 m-0">Allah Help Those Who Help Themselves</h1>
              <div v-if="pages">
                <p v-html="pages.body"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

      <!-- Program shesdule Start -->
      <div class="container-fluid contact py-5">
        <div class="container py-5">
          <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 class="display-3" style="">Program Schedule</h1>
          </div>
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-8" style="text-align: left">
              <h2>Regular programs</h2>
              <p>We regularly add new classes, please visit the mosque for the latest offering.</p>
              <br>
              <div class="table-responsive">
                <table class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline">
                  <thead>
                  <tr>
                    <th>Program</th>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(program, i) in program_schedule" :key="program.id" v-if="program_schedule.length">
                    <td class="text-left">{{ program.name }}</td>
                    <td class="text-left">{{ program.day }}</td>
                    <td class="text-left">{{ program.time }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <br>
              <p style="font-weight: bold">
                Note: The Schedule Can Change At Any Time. Please Contact Us Before Coming.
              </p>
            </div>
            <div class="col-sm-4" style="text-align: left">
              <div class="container-fluid about">
                <div class="container py-5">
                  <div class="row g-5">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FbaisYEG&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2520005324807291" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- Contact Start -->

      <!-- Blog Start -->
      <div class="container-fluid contact py-5">
        <div class="container py-5">
          <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 class="display-3" style="">Visit Facebook</h1>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-lg-6 col-xl-6">
              <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
                <div class="blog-img position-relative overflow-hidden">
                  <img src="/assets/img/fpage.png" class="w-100" alt="" style="height: 350px">
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
                  <img src="/assets/img/gpage.png" class="img-fluid w-100" alt="" style="height: 350px">
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

      <!-- Events Start -->
      <div class="container-fluid event py-5">
        <div class="container py-5">
          <h1 class="display-3 wow fadeIn" data-wow-delay="0.1s">Upcoming <span class="text-primary">Events</span></h1>
          <div class="row g-4 event-item wow fadeIn" data-wow-delay="0.1s" v-for="(event, i) in events" :key="event.id" v-if="events.length">
            <div class="col-3 col-lg-2 pe-0">
              <div class="text-center border-bottom border-dark py-3 px-2">
                <h6>{{ event.event_date }}</h6>
                <p class="mb-0">{{ event.event_time }}</p>
              </div>
            </div>
            <div class="col-9 col-lg-6 border-start border-dark">
              <div class="ms-3">
                <h4 class="mb-3">{{ event.title }}</h4>
                <p class="mb-4" v-html="event.description"></p>
                <a class="btn btn-primary px-3" @click="eventJoin(event.id)" v-if="$auth.loggedIn !== false">Join Now</a>
                <nuxt-link to="/login" class="btn btn-primary px-3" v-else>Join Now</nuxt-link>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="overflow-hidden mb-5">
                <img :src="eventimage(event.image)" class="img-fluid w-100" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Events End -->

      <!-- Team Start -->
      <div class="container-fluid team py-5">
        <div class="container py-5">
          <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 class="display-3">Our Imam</h1>
            <p class="fs-5 text-uppercase text-primary">Our current Imam is {{ imam.name }}. Here is his short intro:</p>
          </div>
          <div class="row g-5">
            <div class="col-lg-4 col-xl-5">
              <div class="team-img wow zoomIn" data-wow-delay="0.1s">
                <img :src="image(imam.image)" class="img-fluid" alt="">
              </div>
            </div>
            <div class="col-lg-8 col-xl-7">
              <div class="team-item wow fadeIn" data-wow-delay="0.1s">
                <h1>{{ imam.name }}</h1>
                <h5 class="fw-normal fst-italic text-primary mb-4">President</h5>
                <p class="mb-4" v-html="imam.description"></p>
<!--                <div class="team-icon d-flex pb-4 mb-4 border-bottom border-primary">-->
<!--                  <a class="btn btn-primary btn-lg-square me-2" href=""><i class="fab fa-facebook-f"></i></a>-->
<!--                  <a class="btn btn-primary btn-lg-square me-2" href=""><i class="fab fa-twitter"></i></a>-->
<!--                  <a href="#" class="btn btn-primary btn-lg-square me-2"><i class="fab fa-instagram"></i></a>-->
<!--                  <a href="#" class="btn btn-primary btn-lg-square"><i class="fab fa-linkedin-in"></i></a>-->
<!--                </div>-->
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
      <!-- Team End -->

<!--      <div class="container-fluid about py-5">-->
<!--        <div class="container py-5">-->
<!--          <div class="row g-5">-->
<!--            <div>-->
<!--              <div id="map"></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->


      <!-- Testiminial Start -->
      <div class="container-fluid testimonial py-5">
        <div class="container py-5">
          <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
            <p class="fs-5 text-uppercase text-primary">Testimonial</p>
            <h1 class="display-3">What People Say About Islam</h1>
          </div>
          <div class="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.2s">
            <div class="testimonial-item" v-for="(testimonial, i) in testimonials" :key="testimonial.id" v-if="testimonials.length">
              <div class="d-flex mb-3">
                <div class="position-relative">
                  <img :src="testimonialImage(testimonial.image)" class="img-fluid" alt="">
                  <div class="btn-md-square bg-primary rounded-circle position-absolute" style="top: 25px; left: -25px;">
                    <i class="fa fa-quote-left text-dark"></i>
                  </div>
                </div>
                <div class="ps-3 my-auto ">
                  <h5 class="mb-0">{{ testimonial.name }}</h5>
                  <p class="m-0">Profession</p>
                </div>
              </div>
              <div class="testimonial-content">
                <div class="d-flex">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                </div>
                <p class="fs-5 m-0 pt-3" v-html="testimonial.complement"></p>
              </div>
            </div>
<!--            <div v-for="(testimonial, i) in testimonials" :key="testimonial.id" v-if="testimonials.length">-->
<!--              <div class="testimonial-item">-->
<!--                <div class="d-flex mb-3">-->
<!--                  <div class="position-relative">-->
<!--                    <img :src="testimonialImage(testimonial.image)" class="img-fluid" alt="">-->
<!--                    <div class="btn-md-square bg-primary rounded-circle position-absolute" style="top: 25px; left: -25px;">-->
<!--                      <i class="fa fa-quote-left text-dark"></i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="ps-3 my-auto ">-->
<!--                    <h5 class="mb-0">{{ testimonial.name }}</h5>-->
<!--                    <p class="m-0">Profession</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="testimonial-content">-->
<!--                  <div class="d-flex">-->
<!--                    <i class="fas fa-star text-primary"></i>-->
<!--                    <i class="fas fa-star text-primary"></i>-->
<!--                    <i class="fas fa-star text-primary"></i>-->
<!--                    <i class="fas fa-star text-primary"></i>-->
<!--                    <i class="fas fa-star text-primary"></i>-->
<!--                  </div>-->
<!--                  <p class="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <!-- Testiminial End -->
    </div>
</template>
<script>
import {base_url} from "~/plugins/base_url";

export default {
  auth:false,
  name: "IndexPage",
  layout: "home",
  head() {
    return {
      //
    };
  },
  data() {
    return {
      user: this.$auth.user,
      imam: {},
      program_schedule: [],
      events: [],
      testimonials: [],
      pages: {},
      announcement: {},
      slug: 'about',
      announcementEnable : true
    };
  },
  created() {
    this.getTestimonial()
  },
  mounted() {
    document.title = 'Home | Baitul Aman';
    setTimeout(()=>{
      this.loadOwlSlider()
    },1000)
    this.getImam();
    this.getProgramSchedule();
    this.getOurEvents();
    this.getPages();
    this.getAnnouncement();
    //this.map();
    // this.getTestimonial();
    },
  methods: {
    getImam(){
      this.$axios.get( base_url + 'api/get-imam').then((response)=>{
        this.imam = response.data.imam;
      }).catch((error)=>{
      })
    },
    map(){
      var latlng = new google.maps.LatLng(53.4303663, -113.4717951);
      var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Set lat/lon values for this property',
        draggable: true
      });
      google.maps.event.addListener(marker, 'dragend', function(a) {
        // bingo!
        // a.latLng contains the co-ordinates where the marker was dropped
      });
    },
    getProgramSchedule(){
      this.$axios.get( base_url + 'api/get-program-schedule').then((response)=>{
        this.program_schedule = response.data.program_schedule;
        //console.log(response);
      }).catch((error)=>{
      })
    },
    getOurEvents(){
      this.$axios.get( base_url + 'api/get-our-events').then((response)=>{
        this.events = response.data.data;
      }).catch((error)=>{
      })
    },
    getTestimonial(){
      this.$axios.get( base_url + 'api/get-testimonial').then((response)=>{
        this.testimonials = response.data.testimonials;
      }).catch((error)=>{
      })
    },
    image(image){
      return base_url + "images/imam/"+ image;
    },
    eventimage(image){
      return base_url + "images/event/"+ image;
    },
    testimonialImage(image){
      return base_url + "images/testimonial/"+ image;
    },
    eventJoin(id){
      this.$axios.get( base_url + 'api/join-events?EventId=' + id, {headers:{Authorization : this.$auth.strategy.token.get() }}).then((response)=>{
        this.$toaster.success("Successfully Submitted! Please Go to Your Profile");
      }).catch((error)=>{
      })
    },
    loadOwlSlider(){
      // Testimonial carousel
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
          0:{
            items:1
          },
          768:{
            items:1
          },
          992:{
            items:2
          },
          1200:{
            items:3
          }
        }
      });

    },
    getPages(){
      this.$axios.get( base_url + 'api/get-pages?slug=' + this.slug).then((response)=>{
        this.pages = response.data.pages;
      }).catch((error)=>{
      })
    },
    getAnnouncement(){
      this.$axios.get( base_url + 'api/get-pages?slug=' + 'announcement').then((response)=>{
        this.announcement = response.data.pages;
        if (response.data.pages.status === 'N'){
          this.announcementEnable = false
        }else {
          this.announcementEnable = true
        }
        console.log(response.data.pages.status)
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>
@keyframes bg {
  0% { background: #000000; }
  25% { background: #000099; }
  50% { background: #009999; }
  75% { background: #999999; }
  100% { background: #000000; }
}
.demo{
  animation: bg 5s linear infinite
}
#map {
  height: 300px;
  border: 1px solid #000;
}
</style>

