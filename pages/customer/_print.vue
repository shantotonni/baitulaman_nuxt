<!DOCTYPE html>
<html>
<body>

<p>This text is normal.</p>

<p><em>This text is emphasized.</em></p>

</body>
</html>

<script>
import {base_url} from "~/plugins/base_url";
import axios from "axios";
export default {
  name: "print.vue",
  auth : true,
  head() {
    return {
      title: "Print | Baitul Aman"
    };
  },
  data(){
    return {
      user: this.$auth.user,
      donate:{},
    }
  },
  created() {
    axios.get(base_url + `api/donate-print/${this.$route.params.print}`,{headers:{Authorization : this.$auth.strategy.token.get() }}).then((response)=>{
      console.log(response)
      this.donate = response.data.data;
      setTimeout(function(){
        window.print()
      },2000)
    });
  },
  mounted() {
   //
  },
  methods: {
    //
  }
}
</script>

<style scoped>
.error{
  color: red;
  font-size: 12px;
}
</style>
