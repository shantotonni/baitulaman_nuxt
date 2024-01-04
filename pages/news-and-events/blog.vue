<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="text-dark">Blogs</h1>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item text-dark" aria-current="page">Blogs</li>
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
        <h1 class="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s"><span class="text-primary">Blogs</span></h1>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-xl-4" v-for="(blog, i) in blogs" :key="blog.id" v-if="blogs.length">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img :src="image(blog.image)" style="max-height: 330px;min-height: 330px" class="img-fluid w-100" alt="">
              </div>
              <div class="p-4">
                <a href="" class="d-inline-block h4 lh-sm mb-3">{{ blog.title }}</a>
                <p class="mb-4" style="text-align: justify" v-html="textTruncate(blog.description)"></p>
                <button type="button" class="btn btn-primary px-3" data-toggle="modal" data-target=".bd-example-modal-lg" @click="blogDetails(blog)">
                  More Details
                </button>
              </div>
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
