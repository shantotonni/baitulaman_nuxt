<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Profile</h1>
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
        <div class="row">
          <div class="col-lg-3">
            <p class="text-dark" style="background: #246a47;color: white!important;padding: 5px">User</p>
            <sidebar />
          </div>
          <div class="col-lg-9">
            <p class="text-dark">Profile</p>
            <form @submit.prevent="updateProfile" @keydown="form.onKeydown($event)">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Name">Name</label>
                    <input type="text" class="form-control" id="name" v-model="form.name">
                    <div class="error" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="form.email">
                    <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phone">Mobile</label>
                    <input type="text" class="form-control" id="phone" v-model="form.phone">
                    <div class="error" v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="Address">Address</label>
                    <input type="text" class="form-control" id="address" v-model="form.address">
                    <div class="error" v-if="form.errors.has('address')" v-html="form.errors.get('address')" />
                  </div>
                </div>
              </div>
              <br>
              <button type="submit" class="btn btn-primary">Update Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
</template>

<script>
import sidebar from "~/components/Partials/sidebar";
import Form from 'vform'
import {base_url} from "~/plugins/base_url";

export default {
  name: "profile.vue",
  components: { sidebar },
  auth:true,
  head() {
    return {
      title: "Profile | Baitul Aman"
    };
  },
  data(){
    return {
      user: this.$auth.user,
      form: new Form({
        name:'',
        email:'',
        phone:'',
        address:'',
      }),
    }
  },
  created() {
    this.form.fill(this.user);
  },
  methods: {
    updateProfile(){
      this.form.post(base_url + "api/auth/profile-update",{headers:{Authorization : this.$auth.strategy.token.get() }}).then(response => {
        this.$toaster.success("Successfully Updated");
      }).catch(e => {
        this.isLoading = false;
      });
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
