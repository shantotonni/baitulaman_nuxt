<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Program</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Program</li>
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
                <th>Customer Name</th>
                <th>Event Title</th>
                <th>Event Date</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(program, i) in ProgramList" :key="program.id" v-if="ProgramList.length">
                <th class="text-center" scope="row">{{ ++i }}</th>
                <td class="text-left">{{ program.customer_name }}</td>
                <td class="text-left">{{ program.title }}</td>
                <td class="text-left">{{ program.event_date }}</td>
              </tr>
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
  name: "program.vue",
  components: { sidebar },
  auth:true,
  head() {
    return {
      title: "Program | Baitul Aman"
    };
  },
  data(){
    return {
      ProgramList:[],
    }
  },
  mounted() {
    this.getCustomerProgramList();
  },
  methods: {
    getCustomerProgramList(){
      this.$axios.get( base_url + 'api/get-customer-program-list').then((response)=>{
        console.log(response)
        this.ProgramList = response.data.data;
      }).catch((error)=>{
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
