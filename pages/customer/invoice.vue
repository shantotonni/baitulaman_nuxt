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
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Phone</th>
                <th>Purpose</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(donate, i) in CustomerList" :key="donate.id" v-if="CustomerList.length">
                <th class="text-center" scope="row">{{ ++i }}</th>
                <td class="text-left">{{ donate.customer_name }}</td>
                <td class="text-left">{{ donate.customer_email }}</td>
                <td class="text-left">{{ donate.customer_phone }}</td>
                <td class="text-left">{{ donate.purpose }}</td>
                <td class="text-right">{{ donate.amount }}</td>
                <td class="text-left">{{ donate.date }}</td>
                <td class="text-left">
                  <nuxt-link :to="`${donate.id}`" class="btn btn-info btn-sm"><i class="mdi mdi-printer"></i> View</nuxt-link>
                </td>
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
      CustomerList:[],
    }
  },
  mounted() {
    this.getCustomerWiseDonationList();
  },
  methods: {
    getCustomerWiseDonationList(){
      this.$axios.get( base_url + 'api/get-customer-donation-list').then((response)=>{
        this.CustomerList = response.data.data;
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
