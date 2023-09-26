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
              <div class="col-md-8 modal_body_left modal_body_left1">
                <h3 class="agileinfo_sign">Login</h3>
                <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter Email" v-model="form.email">
                    <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="" v-model="form.password">
                    <div class="error" v-if="form.errors.has('password')" v-html="form.errors.get('password')" />
                  </div>
                  <br>
                  <input type="submit" class="btn btn-primary" value="Sign In">
                </form>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-md-5 ab_pic_w3ls_text_info">
            <div class="modal-body modal-body-sub_agile" style="background: #f1f1f1;padding: 30px;">
              <div class="col-md-12 modal_body_left modal_body_left1">
                <p style="text-align: center">Don't have an account ? <nuxt-link to="/registration">Signup now</nuxt-link></p>
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
import Form from "vform";

export default {
  name: "login",
  auth: "guest",
  head() {
    return {
      title: "Login | Baitul Aman"
    };
  },
  data(){
    return {
      form: new Form({
        email:'',
        password:'',
      }),
    }
  },
  methods:{
   login(){
     this.$auth.loginWith('local',{data:this.form}).then((response)=>{
       console.log(response)
       if (response.data.status === 401){
         this.$toaster.error("UserId or Password Not Match")
       }else {
         this.$router.push('/customer/profile');
         this.$toaster.success('Successfully LoggedIn')
       }
     })
   },
 }
}
</script>

<style scoped>
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
