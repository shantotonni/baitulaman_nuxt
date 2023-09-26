<template>
    <div>
      <ul class="list-group w3-agile">
        <nuxt-link style="background: #938484;color: white!important;" :to="localePath('/customer/profile')"><li class="list-group-item">Profile</li></nuxt-link>
        <nuxt-link style="background: #938484;color: white!important;" :to="localePath('/customer/invoice')"><li class="list-group-item">Invoice</li></nuxt-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      user: this.$auth.user,
    };
  },
  mounted() {
    //console.log(this.user)
  }
}
</script>

<style scoped>
.list-group-item {
  background: none;
  border: none;
}
.w3-agile a {
  color: white;
  border-bottom: 1px solid white;
  display: block;
}
</style>
