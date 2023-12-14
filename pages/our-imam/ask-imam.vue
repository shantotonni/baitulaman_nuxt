<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Ask The Imam</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Ask The Imam</li>
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
        <div class="row">
          <div class="col-md-12">
            <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
              <h1 class="display-3">Ask The Imam</h1>
              <p class="fs-5 text-uppercase text-primary">Do you have any questions regarding Islam, Quran and Muslims? Our Imam will be more than happy to answer your questions.</p>
              <p class="mb-0">Please fill out the form and someone will contact you shortly.</p>
            </div>
            <form @submit.prevent="store()" @keydown="form.onKeydown($event)">
              <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="col-sm-6">
                  <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Your Name" name="name" v-model="form.name">
                  <div class="error" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                </div>
                <div class="col-sm-6">
                  <input type="email" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Your Email" v-model="form.email">
                  <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                </div>
                <div class="col-12">
                  <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('subject') }" placeholder="Subject" v-model="form.subject">
                  <div class="error" v-if="form.errors.has('subject')" v-html="form.errors.get('subject')" />
                </div>
                <div class="col-12">
                  <textarea class="w-100 form-control bg-transparent p-3" rows="6" cols="10" :class="{ 'is-invalid': form.errors.has('message') }" placeholder="Your Message" v-model="form.message"></textarea>
                  <div class="error" v-if="form.errors.has('message')" v-html="form.errors.get('message')" />
                </div>
                <div class="col-12">
                  <div class="captcha" style="background: #e7deef;width: 200px;text-align: center">
                    <template v-for="(char, index) in captchaChars">
                    <span class="captcha-char" :key="index" :style="{ fontSize: char.fontSize + 'px', transform: 'rotate(' + char.rotation + 'deg)' }">
                        {{ char.char }}
                    </span>
                    </template>
                  </div>
                  <button class="btn" type="button" @click="generateCaptcha" style="background: #28262a;width: 200px;text-align: center;color: white">Refresh</button>
                </div>
                <div class="col-4">
                  <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('capture') }" placeholder="Enter Captcha" v-model="form.capture">
                  <div class="error" v-if="form.errors.has('capture')" v-html="form.errors.get('capture')" />
                </div>
                <div class="col-12 text-center">
                  <button class="btn btn-primary border-0 py-3 px-5" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
import Form from "vform";
export default {
  name: "ask-imam",
  auth:false,
  head() {
    return {
      title: "Ask The Imam | Baitul Aman"
    };
  },
  data() {
    return {
      form: new Form({
        name:'',
        email:'',
        subject:'',
        message:'',
        capture:'',
      }),
      captchaCharsCheck: '',
      captchaChars: [],
      characters: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    };
  },
  mounted() {
    document.title = 'Ask The Imam | Baitul Aman';
    this.generateCaptcha();
  },
  methods: {
    store(){
      if (this.captchaCharsCheck === this.form.capture){
        this.form.post( base_url + 'api/question').then((response)=>{
          if (response.data.status === 'success'){
            this.form.name ='',
              this.form.email ='',
              this.form.subject ='',
              this.form.message = '',
              this.$toaster.success("Successfully Inserted")
          }
        }).catch((error)=>{
          //
        })
      }else {
        this.$toaster.error("Captcha Not Match")
      }
    },
    generateCaptcha() {
      const chars = this.characters.split('');
      let captchaChars = [];
      for (let i = 0; i < 6; i++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        let fontSize = Math.floor(Math.random() * 10) + 20; // random font size between 20 and 30
        let rotation = Math.floor(Math.random() * 21) - 10; // random rotation between -10 and 10 degrees
        captchaChars.push({ char, fontSize, rotation });
      }
      this.captchaChars = captchaChars;
      captchaChars.forEach((getRecord, index) => {
        this.captchaCharsCheck += getRecord.char;
      })
    },
  },
}
</script>

<style scoped>
.error{
  color: red;
  font-size: 12px;
}
</style>

