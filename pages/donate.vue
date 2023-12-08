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
      <div class="container py-5" style="box-shadow: 5px 0px 20px 0px #9f9c9c;background: white;">
        <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-3" style="">Donate</h1>
        </div>

        <form action="/charge" method="post" id="payment-form">
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-6 offset-3" style="text-align: left">
              <div style="text-align: center">
                <ul style="background: #fdecec">
                  <li v-for="(error, i) in displayError" :key="error" v-if="displayError.length" style="text-align: left;color: red;list-style: none">{{ error }}</li>
                </ul>
                <div class="row g-4 wow fadeIn paymentClass" data-wow-delay="0.3s">
                  <div class="col-sm-6">
                    <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Your Name" name="name" v-model="form.name">
                    <div class="error" v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                  </div>
                  <div class="col-sm-6">
                    <input type="text" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('mobile') }" placeholder="Your Mobile" v-model="form.mobile">
                    <div class="error" v-if="form.errors.has('mobile')" v-html="form.errors.get('mobile')" />
                  </div>
                  <div class="col-sm-12">
                    <input type="email" class="form-control bg-transparent p-3" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Your Email" v-model="form.email">
                    <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                  </div>
                  <hr>
                  <p style="font-size: 20px;background: #c4e8f5;color: #707070">Card Information</p>

                  <div class="form-row top-row">
                    <div id="card-number" class="field card-number"></div>
                    <span class="input-errors" id="card-number-errors" role="alert" style="color: red"></span>
<!--                    <div class="input-errors" id="card-number-errors" role="alert" style="color: red"></div>-->
                  </div>

                  <div class="form-row" style="height: 40px">
                    <div id="card-date" class="field third-width card-number"></div>
                    <span class="input-errors" id="card-date-errors" role="alert" style="color: red"></span>
<!--                    <div class="input-errors" id="card-date-errors" role="alert"></div>-->
                  </div>

                  <div class="form-row" style="height: 40px">
                    <div id="card-cvv" class="field third-width card-number"></div>
                    <span class="input-errors" id="card-cvv-errors" role="alert" style="color: red"></span>
<!--                    <div class="input-errors" id="card-cvv-errors" role="alert"></div>-->
                  </div>

                  <div class="form-row" style="height: 40px">
                    <div id="card-postal-code" class="field third-width card-number"></div>
                    <div class="input-errors" id="card-postal-code-errors" role="alert"></div>
                  </div>
                  <hr>
                  <div class="form-row top-row">
                    <div id="amount" class="field card-number" style="height: 45px">
                      <input name="amount" placeholder="Enter Amount" class="form-control" v-model="form.amount" :class="{ 'is-invalid': form.errors.has('amount') }">
                      <div class="error" v-if="form.errors.has('amount')" v-html="form.errors.get('amount')" />
                    </div>
                  </div>

                  <div id="card-response" role="alert"></div>

                  <div class="button-container">
                    <button style="padding: 10px; background: #198754;color: white;">Submit Payment</button>
                  </div>

                </div>
              </div>
              <br>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
import axios from "axios";
import Form from "vform";

export default {
  name: "donate.vue",
  auth:false,
  head() {
    return {
      title: "Donate | Baitul Aman"
    };
  },
  data () {
    return {
      form: new Form({
        name:'',
        email:'',
        mobile:'',
        amount:'',
        token: ''
      }),
      loading: false,
      displayError: []
    };
  },
  mounted() {
    //this.getApiKey()
    this.store();
  },
  methods: {
    store(){
      const clover = new Clover('419ab13ed0097d21e2ef64f4ef882a8f', {
        merchantId: 'JMA1GP70E3EZ1'
      });
      const elements = clover.elements();

      const styles = {
        body: {
          fontFamily: 'Roboto, Open Sans, sans-serif',
          fontSize: '16px',
        },
        input: {
          fontSize: '16px',
          border: '1px solid #d9d9d9!important',
          borderRadius: '3px!important',
          height: '45px!important',
          padding: '10px'
        },
      };

      const form = document.getElementById('payment-form');
      const cardNumber = elements.create('CARD_NUMBER', styles);
      const cardDate = elements.create('CARD_DATE', styles);
      const cardCvv = elements.create('CARD_CVV', styles);
      const cardPostalCode = elements.create('CARD_POSTAL_CODE', styles);

      cardNumber.mount('#card-number');
      cardDate.mount('#card-date');
      cardCvv.mount('#card-cvv');
      cardPostalCode.mount('#card-postal-code');

      const cardResponse = document.getElementById('card-response');
      const displayCardNumberError = document.getElementById('card-number-errors');
      const displayCardDateError = document.getElementById('card-date-errors');
      const displayCardCvvError = document.getElementById('card-cvv-errors');
      const displayCardPostalCodeError = document.getElementById('card-postal-code-errors');

      // Handle real-time validation errors from the card element
      cardNumber.addEventListener('change', function(event) {
        if (event.CARD_NUMBER.error === undefined){
          displayCardNumberError.innerHTML = ''
        }else {
          displayCardNumberError.innerHTML = event.CARD_NUMBER.error
        }
      });

      cardNumber.addEventListener('blur', function(event) {
        console.log(`cardNumber blur ${JSON.stringify(event)}`);
      });

      cardDate.addEventListener('change', function(event) {
        if (event.CARD_DATE.error === undefined){
          displayCardDateError.innerHTML = ''
        }else {
          displayCardDateError.innerHTML = event.CARD_DATE.error
        }
      });

      cardDate.addEventListener('blur', function(event) {
        console.log(`cardDate blur ${JSON.stringify(event)}`);
      });

      cardCvv.addEventListener('change', function(event) {
        if (event.CARD_CVV.error === undefined){
          displayCardCvvError.innerHTML = ''
        }else {
          displayCardCvvError.innerHTML = event.CARD_CVV.error
        }
        console.log(`cardCvv changed ${JSON.stringify(event)}`);
      });

      cardCvv.addEventListener('blur', function(event) {
        console.log(`cardCvv blur ${JSON.stringify(event)}`);
      });

      cardPostalCode.addEventListener('change', function(event) {
        // displayCardPostalCodeError.innerHTML = event.CARD_POSTAL_CODE.error
        console.log(`cardPostalCode changed ${JSON.stringify(event)}`);
      });

      cardPostalCode.addEventListener('blur', function(event) {
        console.log(`cardPostalCode blur ${JSON.stringify(event)}`);
      });

      // Listen for form submission
      let instance = this;
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Use the iframe's tokenization method with the user-entered card details
        clover.createToken()
          .then(function(result) {
            if (result.errors) {
              Object.values(result.errors).forEach((value)=>{
                instance.displayError.push(value)
              });
            } else {
              instance.form.token = result.token;
              instance.createCharge();
            }
          });
      });
    },
    createCharge(){
      this.form.post( base_url + 'api/charge').then((response)=>{
        if (response.data.status === 'success'){
            this.$toaster.success(response.data.status)
            setTimeout(()=>{
              this.$router.go();
            },4000)
        }else{
          this.$toaster.error(response.data.status)
        }
      }).catch((error)=>{
        //
      })
    },
  },
}
</script>

<style scoped>
.error{
  color: red;
  font-size: 12px;
}
.card-number{
  height: 45px;
}
.input-errors{
  text-align: left;
  display: block;
}

</style>
