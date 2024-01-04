<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">News</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">News</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Blog Start -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <h1 class="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s"><span class="text-primary">News and Facebook Feed</span></h1>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-xl-6">
            <div class="col-sm-4" style="text-align: center">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FbaisYEG&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2520005324807291" width="380" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog End -->

    <!-- Modal -->
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ blog_details.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p v-html="blog_details.description"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";

export default {
  name: "blog.vue",
  auth:false,
  head() {
    return {
      title: "Blog | Baitul Aman"
    };
  },
  data() {
    return {
      blogs: [],
      blog_details: {},
    };
  },
  mounted() {
    document.title = 'Blog | Baitul Aman';
    this.getBlog();
  },
  methods: {
    getBlog(){
      this.$axios.get( base_url + 'api/get-our-blog').then((response)=>{
        this.blogs = response.data.data;
      }).catch((error)=>{
      })
    },
    blogDetails(blog){
      this.blog_details = blog
      $("#blogModal").modal("show");
    },
    image(image){
      return base_url + "images/blog/"+ image;
    },
    textTruncate(text){
      return text.substring(100,0) + '.....';
    }
  },
}
</script>

<style scoped>

</style>
