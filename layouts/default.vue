<template>
  <div class="wrapper" v-if="!loading">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Partials/Footer'
import Header from "~/components/Partials/Header";
export default {
  name: 'default',
  components: { Footer, Header },
  data: () => ({
    loading: false
  }),
  created() {
    var self = this;
    self.$nextTick(function() {
      self.loaded = true;
    })
  }
}
</script>

<style scoped>

</style>
