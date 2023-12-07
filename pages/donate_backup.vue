<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Donate</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Donate</li>
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
        <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-3" style="">Donate</h1>
        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <div style="text-align: center">
              <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="col-sm-6">
                  <input type="text" class="form-control bg-transparent p-3" placeholder="Purpose (optional)" v-model="purpose">
                </div>
                <div class="col-sm-6">
                  <input type="number" class="form-control bg-transparent p-3" placeholder="Amount" readonly v-model="amount">
                </div>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { StripeCheckout } from '@vue-stripe/vue-stripe';
import {base_url} from "~/plugins/base_url";
import axios from "axios";

export default {
  name: "donate.vue",
  components: {
    //StripeCheckout,
  },
  auth:false,
  head() {
    return {
      title: "Donate | DadHQ"
    };
  },
  data () {
    return {
      //user: this.$auth.user,
      //publishableKey : 'pk_test_899fIi8daihde0gtgs2UrSeR',
      //sessionId : null,
      loading: false,
      // lineItems: [
      //   {
      //     price: 'price_1NsmJ9G1iNFde2c46crkvfKW',
      //     quantity: 1,
      //   },
      // ],
      // successURL: 'https://baitul.newmusicparadigm.com/',
      // cancelURL: 'https://baitul.newmusicparadigm.com/',
      // purpose : '',
      // amount : 100,
      // userId : this.$auth.user.id

    };
  },
  mounted() {
    //this.getSession()
  },
  methods: {
    getSession(){
      this.$axios.get( base_url + 'api/get-session?purpose=' + this.purpose
        + "&amount=" + this.amount
        + "&userId=" + this.userId
      ).then((response)=>{
        this.pages = response.data.pages;
        //console.log(response);
      }).catch((error)=>{
      })
    },
    submit () {
      // You will be redirected to Stripe's secure checkout page
      //this.$refs.checkoutRef.redirectToCheckout();
    },
  },
}
</script>

<style scoped>

</style>
