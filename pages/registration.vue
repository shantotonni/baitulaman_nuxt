<template>

  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Login</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Login</li>
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
          <div class="col-md-7 ab_pic_w3ls_text_info">
            <div class="modal-body modal-body-sub_agile" style="background: #f1f1f1;padding: 30px;">
              <div class="col-md-12 modal_body_left modal_body_left1">
                <h3 class="agileinfo_sign">Login</h3>
                <form @submit.prevent="registration" @keydown="form.onKeydown($event)">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="form.name">
                        <div class="error" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Enter Email" v-model="form.email">
                        <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                      </div>
                    </div>
                    <div class="com-md-6">
                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" id="phone" placeholder="Enter Address" v-model="form.phone">
                        <div class="error" v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />
                      </div>
                    </div>
                    <div class="com-md-6">
                      <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter Address" v-model="form.address">
                        <div class="error" v-if="form.errors.has('address')" v-html="form.errors.get('address')" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter Password" v-model="form.password">
                        <div class="error" v-if="form.errors.has('password')" v-html="form.errors.get('password')" />
                      </div>
                    </div>
                  </div>
                  <br>
                  <input class="btn btn-primary" type="submit" value="Sign Up">
                </form>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-md-5 ab_pic_w3ls_text_info">
            <div class="modal-body modal-body-sub_agile" style="background: #f1f1f1;padding: 30px;">
              <div class="col-md-12 modal_body_left modal_body_left1">
                <p style="text-align: center">Have an Account ? <nuxt-link to="/login">Please Login</nuxt-link></p>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
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
  name: "registration",
  auth:false,
  head() {
    return {
      title: "Registration | Baitul Aman"
    };
  },
  data(){
    return {
      form: new Form({
        name:'',
        email:'',
        phone:'',
        password:'',
        address:'',
      }),
    }
  },
  mounted() {
   //
  },
  created() {
    //
  },
  methods: {
    registration(){
      this.form.post( base_url + 'api/auth/registration').then((response)=>{
        if (response.data.message === 'success'){
          this.$router.push('/login')
          this.$toaster.success("Successfully Registered")
        }
      }).catch((error)=>{
        //
      })
    },
  }
}
</script>

<style scoped>
.agile_ab_w3ls_info {
  background: #f9f9f9;
}
label {
  font-weight: normal;
}
.form-control {
  height: 40px;
}
.error{
  color: red;
  font-size: 12px;
}
</style>
