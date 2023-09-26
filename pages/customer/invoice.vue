<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Invoice</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Invoice</li>
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
            <p class="text-dark" style="background: #246a47;color: white!important;padding: 5px">Customer</p>
            <sidebar />
          </div>
          <div class="col-lg-9">
            <table class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline table-sm small">
              <thead>
              <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
<!--              <tr v-for="(blog, i) in blogs" :key="blog.id" v-if="blogs.length">-->
<!--                <th class="text-center" scope="row">{{ ++i }}</th>-->
<!--                <td class="text-left">{{ blog.title }}</td>-->
<!--                <td class="text-center">-->
<!--                  <img v-if="blog.image" height="40" width="40"-->
<!--                       :src="tableImage(blog.image)" alt="">-->
<!--                </td>-->
<!--                <td class="text-left">{{ blog.status }}</td>-->
<!--              </tr>-->
              </tbody>
            </table>
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
