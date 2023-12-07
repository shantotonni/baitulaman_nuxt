<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Apply For Membership</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Apply For Membership</li>
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
          <h1 class="display-3">Apply For Membership</h1>
        </div>
        <form @submit.prevent="store()" @keydown="form.onKeydown($event)">
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-6">
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Full Name" name="name" v-model="form.name">
              <div class="error" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Your Phone Number" v-model="form.phone">
              <div class="error" v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />
            </div>
            <div class="col-sm-6">
              <input type="email" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Your Email Address" v-model="form.email">
              <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
            </div>
            <div class="col-sm-6">
              <input type="number" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('age') }" placeholder="Your Age" v-model="form.age">
              <div class="error" v-if="form.errors.has('age')" v-html="form.errors.get('age')" />
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('father_name') }" placeholder="Your Father’s Name" v-model="form.father_name">
              <div class="error" v-if="form.errors.has('father_name')" v-html="form.errors.get('father_name')" />
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('father_email') }" placeholder="Your Father’s Email" v-model="form.father_email">
              <div class="error" v-if="form.errors.has('father_email')" v-html="form.errors.get('father_email')" />
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
      title: "Apply For Membership | Baitul Aman"
    };
  },
  data(){
    return {
      form: new Form({
        name:'',
        phone:'',
        email:'',
        age:'',
        father_name:'',
        father_email:'',
      }),
    }
  },
  methods: {
    store(){
      this.form.post( base_url + 'api/store-membership').then((response)=>{
        if (response.data.status === 'success'){
          this.$router.go(this.$router.currentRoute)
          this.$toaster.success("Successfully Inserted");
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
