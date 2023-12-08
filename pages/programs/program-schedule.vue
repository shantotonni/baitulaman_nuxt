<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Program Schedule</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Program Schedule</li>
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
          <h1 class="display-3" style="">Program Schedule</h1>

        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-12" style="text-align: center">
            <h2>Regular programs</h2>
            <p>We regularly add new classes, please visit the mosque for the latest offering.</p>
            <br>
            <table class="table table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline">
              <thead>
                  <tr>
                    <th>Program</th>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(program, i) in program_schedule" :key="program.id" v-if="program_schedule.length">
                  <td class="text-left">{{ program.name }}</td>
                  <td class="text-left">{{ program.day }}</td>
                  <td class="text-left">{{ program.time }}</td>
                </tr>
              </tbody>
            </table>
            <br>
            <p style="font-weight: bold">
              Note: The Schedule Can Change At Any Time. Please Contact Us Before Coming.
            </p>
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
  name: "programs-schedule.vue",
  auth:false,
  head() {
    return {
      title: "Program Schedule | Baitul Aman"
    };
  },
  data() {
    return {
      program_schedule: [],
    };
  },
  mounted() {
    document.title = 'Program Schedule | Baitul Aman';
    this.getProgramSchedule();
  },
  methods: {
    getProgramSchedule(){
      this.$axios.get( base_url + 'api/get-program-schedule').then((response)=>{
        this.program_schedule = response.data.program_schedule;
        //console.log(response);
      }).catch((error)=>{
      })
    },
  },
}
</script>

<style scoped>

</style>
