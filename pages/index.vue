<template>
    <div>
      <!-- Hero Start -->
      <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-header-inner animated zoomIn">
                <p class="fs-4 text-dark" >WELCOME TO THEMosque</p>
                <h1 class="mb-5 text-dark">Purity Comes From Faith</h1>
<!--                <a href="" class="btn btn-success py-3 px-5">Read More</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero End -->

      <!-- About Satrt -->
      <div class="container-fluid about py-5">
        <div class="container py-5">
          <div class="row g-5 mb-5">
            <div class="col-xl-6">
              <div class="row g-4">
                <div class="col-6">
                  <img src="/assets/img/about-1.jpg" class="img-fluid h-100 wow zoomIn" data-wow-delay="0.1s" alt="">
                </div>
                <div class="col-6">
                  <img src="/assets/img/about-2.jpg" class="img-fluid pb-3 wow zoomIn" data-wow-delay="0.1s" alt="">
                  <img src="/assets/img/about-3.jpg" class="img-fluid pt-3 wow zoomIn" data-wow-delay="0.1s" alt="">
                </div>
              </div>
            </div>
            <div class="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="fs-5 text-uppercase text-primary">About THEMosque</p>
              <h1 class="display-5 pb-4 m-0">Allah Help Those Who Help Themselves</h1>
              <p class="pb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam. Etiam quis mauris justo. Vivamus purus nulla, rutrum ac risus in.</p>
              <div class="row g-4 mb-4">
                <div class="col-md-6">
                  <div class="ps-3 d-flex align-items-center justify-content-start">
                    <span class="bg-primary btn-md-square rounded-circle mt-4 me-2"><i class="fa fa-eye text-dark fa-4x mb-5 pb-2"></i></span>
                    <div class="ms-4">
                      <h5>Our Vision</h5>
                      <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ps-3 d-flex align-items-center justify-content-start">
                    <span class="bg-primary btn-md-square rounded-circle mt-4 me-2"><i class="fa fa-flag text-dark fa-4x mb-5 pb-2"></i></span>
                    <div class="ms-4">
                      <h5>Our Mission</h5>
                      <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-light p-3 mb-4">
                <div class="row align-items-center justify-content-center">
                  <div class="col-3">
                    <img src="/assets/img/about-child.jpg" class="img-fluid rounded-circle" alt="">
                  </div>
                  <div class="col-6">
                    <p class="mb-0">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam. Etiam quis mauris justo.</p>
                  </div>
                  <div class="col-3">
<!--                    <h2 class="mb-0 text-primary text-center">$20,46</h2>-->
<!--                    <h5 class="mb-0 text-center">Raised</h5>-->
                  </div>
                </div>
              </div>
              <div class="row g-2">
                <div class="col-md-6">
                  <p class="mb-2"><i class="fa fa-check text-primary me-3"></i>Charity & Donation</p>
                  <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>Parent Education</p>
                </div>
                <div class="col-md-6">
                  <p class="mb-2"><i class="fa fa-check text-primary me-3"></i>Hadith & Sunnah</p>
                  <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>Mosque Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

      <div class="container-fluid about py-5">
        <div class="container py-5">
          <div class="row g-5">
            <div>
              <iframe id="iframe" title="prayerWidget" class="widget-m-top" style="height: 600px;width: 100%; border: 1px solid #ddd;" scrolling="no" src="https://time.my-masjid.com/salahscreen/d4c89c73-355e-4da5-95a2-f399bc4831b3"></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Program shesdule Start -->
      <div class="container-fluid contact py-5">
        <div class="container py-5">
          <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 class="display-3" style="">Program Schedule</h1>
          </div>
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-12" style="text-align: left">
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
                <div class="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                  <a class="btn btn-primary btn-lg-square me-2" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-primary btn-lg-square me-2" href=""><i class="fab fa-twitter"></i></a>
                  <a href="#" class="btn btn-primary btn-lg-square me-2"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="btn btn-primary btn-lg-square"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
      <!-- Team End -->
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
    // this.getTestimonial();
    },
  methods: {
    getImam(){
      this.$axios.get( base_url + 'api/get-imam').then((response)=>{
        this.imam = response.data.imam;
      }).catch((error)=>{
      })
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
        this.events = response.data.events;
      }).catch((error)=>{
      })
    },
    getTestimonial(){
      this.$axios.get( base_url + 'api/get-testimonial').then((response)=>{
        this.testimonials = response.data.testimonials;
        console.log(response)
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
        console.log(response)
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

    }
  },
}
</script>

<style scoped>

</style>

