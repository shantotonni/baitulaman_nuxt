<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Mailing List</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Mailing List</li>
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
        <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
          <h1 class="display-3">Mailing List</h1>
          <p class="mb-0">Please enter your contact information to receive emails with important news and updates from BAIS.</p>
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
              <textarea class="w-100 form-control bg-transparent p-3" rows="6" cols="10" :class="{ 'is-invalid': form.errors.has('message') }" placeholder="Your Message" v-model="form.message"></textarea>
              <div class="error" v-if="form.errors.has('message')" v-html="form.errors.get('message')" />
            </div>
            <div class="col-12 text-center">
              <button class="btn btn-primary border-0 py-3 px-5" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
import Form from 'vform'
import {base_url} from "~/plugins/base_url";

export default {
  name: "mailing-list.vue",
  auth:false,
  head() {
    return {
      title: "Mailing List | Baitul Aman"
    };
  },
  data(){
    return {
      form: new Form({
        name:'',
        email:'',
        message:'',
      }),
    }
  },
  methods: {
    store(){
      this.form.post( base_url + 'api/mailing').then((response)=>{
        if (response.data.status === 'success'){
           this.form.name ='',
           this.form.email ='',
           this.form.message = '',
           this.$toaster.success("Successfully Inserted")
        }
      }).catch((error)=>{
        //
      })
    },
  }
}
</script>

<style scoped>
.error{
  color: red;
  font-size: 12px;
}
</style>
