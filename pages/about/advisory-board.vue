<template>
  <div>
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Founding Members</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Founding Member</li>
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
          <h1 class="display-3" style="">Founding Member</h1>
        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-12" style="text-align: center">
            <p>
              Baitul Aman Islamic Society is happy to announce the formation of an Founding Member for future directions of the society.
              Following honourable community members have kindly agreed to sit in the Founding Member:
            </p>
            <br>
            <table class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline">
              <tbody>
                    <tr v-for="(advisor, i) in advisory_board" :key="advisor.id" v-if="advisory_board.length">
                      <th class="text-center" scope="row">{{ ++i }}</th>
                      <td class="text-left">{{ advisor.name }}</td>
                      <td class="text-left">{{ advisor.designation }}</td>
                      <td class="text-left">{{ advisor.mobile }}</td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
export default {
  name: "advisory-board",
  auth:false,
  head() {
    return {
      title: "Founding Member | Baitul Aman"
    };
  },
  data() {
    return {
      advisory_board: {},
    };
  },
  mounted() {
    document.title = 'Founding Member | Baitul Aman';
    this.getAbout();
  },
  methods: {
    getAbout(){
      this.$axios.get( base_url + 'api/get-advisory-board').then((response)=>{
        this.advisory_board = response.data.advisory_board;
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
