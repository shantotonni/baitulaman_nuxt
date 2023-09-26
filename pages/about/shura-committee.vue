<template>
    <div>
      <!-- Hero Start -->
      <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-header-inner animated zoomIn">
                <h1 class="text-dark">Shura Committee</h1>
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                  <li class="breadcrumb-item text-dark" aria-current="page">Shura Committee</li>
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
            <h1 class="display-3" style="">Shura Committee</h1>

          </div>
          <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="col-sm-8 offset-2" style="text-align: left">
              <p style="text-align: center">
                Meet our current Shura committee.
              </p>
              <br>
              <table class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline">
                <tbody>
                <tr v-for="(shura, i) in shura_committee" :key="shura.id" v-if="shura_committee.length">
                  <th class="text-center" scope="row">{{ ++i }}</th>
                  <td class="text-left">{{ shura.name }}</td>
                  <td class="text-left">{{ shura.designation }}</td>
                  <td class="text-left">{{ shura.mobile }}</td>
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
import {base_url} from "~/plugins/base_url";

export default {
  name: "shura-committee",
  auth:false,
  head() {
    return {
      title: "Shura Committee | Baitul Aman"
    };
  },
  data() {
    return {
      shura_committee: {},
    };
  },
  mounted() {
    document.title = 'Shura Committee | Baitul Aman';
    this.getShuraCommittee();
  },
  methods: {
    getShuraCommittee(){
      this.$axios.get( base_url + 'api/get-shura-committee').then((response)=>{
        this.shura_committee = response.data.shura_committee;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
