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
                <a href="#" class="payment-methods-btn center-align"
                   @click.prevent="paymentForm()">
                  Action
                </a>
              </div>
              <br>
<!--              <stripe-checkout-->
<!--                ref="checkoutRef"-->
<!--                mode="payment"-->
<!--                :pk="publishableKey"-->
<!--                :line-items="lineItems"-->
<!--                :success-url="successURL"-->
<!--                :cancel-url="cancelURL"-->
<!--              />-->
<!--              <button @click="submit">Pay now!</button>-->

            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
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
      user: this.$auth.user,
      type:'stripe',
      title:'demo',
      available_to_client: 1,
      enable: 1,
      purpose:'',
      amount:'',
      publishableKey : 'pk_live_It4joF0iwve2TBZVAViUYvnH',
      sessionId : null,
      loading: false,
      stripeBill: 0,
      selectedMethodId : 0,
      paymentMethodClicked: false,
      isPaymentMethodDefault: false,
      paymentMethodType: '',

    };
  },
  mounted() {
    //this.getSession()
  },
  methods: {
    paymentForm() {
      let instance = this;
      if (instance.publishableKey) {
        instance.handler = StripeCheckout.configure({
          key: instance.publishableKey,
          locale: 'auto',
          token: function (token) {

          },
        });
      }
    },
    // getSession(){
    //   this.$axios.get( base_url + 'api/get-session?purpose=' + this.purpose
    //     + "&amount=" + this.amount
    //     + "&UserId=" + this.user.id
    //   ).then((response)=>{
    //     this.pages = response.data.pages;
    //     //console.log(response);
    //   }).catch((error)=>{
    //   })
    // },
    // submit () {
    //   // You will be redirected to Stripe's secure checkout page
    //   this.$refs.checkoutRef.redirectToCheckout();
    // },
  },
}
</script>

<style scoped>

</style>
