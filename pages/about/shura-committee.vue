<template>
    <div>
      <!-- Hero Start -->
      <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-header-inner animated zoomIn">
                <h1 class="display-1 text-dark">Shura Committee</h1>
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
                <tr>
                  <th class="text-center" scope="row">1</th>
                  <td class="text-left">Joynal Abedin</td>
                </tr>
                <tr>
                  <th class="text-center" scope="row">2</th>
                  <td class="text-left">Khairul Robin</td>
                </tr>
<!--                <tr v-for="(page, i) in pages" :key="page.id" v-if="pages.length">-->
<!--                  <th class="text-center" scope="row">{{ ++i }}</th>-->
<!--                  <td class="text-left">{{ page.title }}</td>-->
<!--                  <td class="text-left">{{ page.slug }}</td>-->
<!--                  <td class="text-center">-->
<!--                    <router-link :to="`page-details/${page.id}`" class="btn btn-primary btn-sm btn-xs"><i class="far fa-eye"></i></router-link>-->
<!--                    <button @click="edit(page)" class="btn btn-success btn-sm">-->
<!--                      <i-->
<!--                        class="far fa-edit"></i></button>-->
<!--                    <button @click="destroy(page.id)"-->
<!--                            class="btn btn-danger btn-sm"><i class="fas fa-trash"></i>-->
<!--                    </button>-->
<!--                  </td>-->
<!--                </tr>-->
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
      title: "Objectives | Baitul Aman"
    };
  },
  data() {
    return {
      objectives: {},
    };
  },
  mounted() {
    document.title = 'Objectives | Baitul Aman';
    this.getAbout();
  },
  methods: {
    getAbout(){
      this.$axios.get( base_url + 'api/get-objectives').then((response)=>{
        this.objectives = response.data.objectives;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
