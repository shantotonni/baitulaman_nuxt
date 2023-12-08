<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Sub Committee</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Sub Committee</li>
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
          <h1 class="display-3" style="">Sub Committee</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-12" style="text-align: center">
            <table class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline">
              <tbody>
                    <tr v-for="(advisor, i) in sub" :key="advisor.id" v-if="sub.length">
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
    <!-- Contact Start -->
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
export default {
  name: "sub-committee",
  auth:false,
  head() {
    return {
      title: "Sub Committee | Baitul Aman"
    };
  },
  data() {
    return {
      sub: [],
    };
  },
  mounted() {
    document.title = 'Sub Committee | Baitul Aman';
    this.getAbout();
  },
  methods: {
    getAbout(){
      this.$axios.get( base_url + 'api/get-sub-committee-list').then((response)=>{
        this.sub = response.data.sub;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
