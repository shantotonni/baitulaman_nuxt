<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">

      </div>
    </div>
    <!-- Hero End -->

    <!-- Contact Start -->
    <div class="container-fluid contact py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-2">
          </div>
          <div class="col-lg-8">
            <div class="row" id="printMe">
              <div class="col-xl-12 col-md-12">
                <div class="card pricing-box">
                  <div class="card-body" id="print">
                    <div class="student">
                      <h4 style="text-align: center;font-weight: bold;margin: 0;color:#6a6ad1">Baitul Aman Islamic Society Edmonton</h4>
<!--                      <img src="/assets/img/logo/logo.png" style="width: 155px; margin-top: -56px;margin-left: 10px;" alt="not found">-->
                      <br>
                      <br>
                      <div class="col-md-12 first_part" >
                        <div style="text-align: left">
                          <div class="col-md-7">
                            <p style="font-size: 18px;color: rgb(106, 106, 209)">Donor Name : {{ invoice.customer_name }}</p>
                            <p style="font-size: 18px;color: rgb(106, 106, 209)">Phone Number : {{ invoice.customer_phone }}</p>
                            <p style="font-size: 18px;color: rgb(106, 106, 209)">Email : {{ invoice.customer_email }}</p>
                            <p style="font-size: 18px;color: rgb(106, 106, 209)">Purpose : {{ invoice.purpose }}</p>
                            <p style="font-size: 18px;color: rgb(106, 106, 209)">Amount : {{ invoice.amount }}</p>
                            <p style="font-size: 18px;color: rgb(106, 106, 209)">Date : {{ invoice.date }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button v-print="'#printMe'" class="btn btn-success" style="text-align: center">Print</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
  </div>
 </template>

 <script>
 import {base_url} from "~/plugins/base_url";

 export default {
   name: 'IndexPage',
   auth:true,
   head() {
     return {
       title: "Home | Market Exchange"
     };
   },
   data(){
     return {
       brandSlug: this.$route.params.invoiceprint,
       invoice:{}
     }
   },
   mounted() {
     this.getInvoiceData()
   },
   methods: {
     getInvoiceData(){
       this.$axios.post( base_url + 'api/get-all-invoice-data', {invoice : this.brandSlug}).then((response)=>{
         console.log(response.data.data)
        this.invoice = response.data.data
         // setTimeout(function(){
         //   window.print()
         // },2000)
       }).catch((error)=>{
       })
     },
     print() {
       this.$htmlToPaper('printMe');
       setTimeout(function(){
         window.print()
       },2000)
     }
   }
 }
 </script>

 <style scoped>
 .grid figure img{
   position: relative;
   display: block;
   opacity: 1;
 }
 .banner_bottom_agile_info {
   padding: 2em 0;
 }

 .ratings{
   margin-right:10px;
 }
 .ratings i{

   color:#cecece;
   font-size:16px;
 }
 .rating-color{
   color:#fbc634 !important;
 }
 .review-count{
   font-weight:400;
   margin-bottom:2px;
   font-size:24px !important;
 }
 .small-ratings i{
   color:#cecece;
 }
 .review-stat{
   font-weight:300;
   font-size:18px;
   margin-bottom:2px;
 }
 </style>
