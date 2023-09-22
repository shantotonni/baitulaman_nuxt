<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark">Profile</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Profile</li>
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
          <h1 class="display-3">Profile</h1>
          <p class="mb-0">Please enter your contact information to receive emails with important news and updates from BAIS.</p>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
import Form from 'vform'
import {base_url} from "~/plugins/base_url";

export default {
  name: "profile.vue",
  auth:true,
  head() {
    return {
      title: "Profile | Baitul Aman"
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
      // this.form.post( base_url + 'api/mailing').then((response)=>{
      //   if (response.data.status === 'success'){
      //     this.form.name ='',
      //       this.form.email ='',
      //       this.form.message = '',
      //       this.$toaster.success("Successfully Inserted")
      //   }
      // }).catch((error)=>{
      //   //
      // })
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
