<template>
  <div>
    <!-- Hero Start -->
    <div class="container-fluid hero-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-header-inner animated zoomIn">
              <h1 class="display-1 text-dark" style="font-size: 3rem">News</h1>
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

    <!-- Contact Start -->
    <div class="container-fluid contact py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-3">News</h1>
        </div>
        <div class="row g-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="col-sm-8 offset-2" style="text-align: left">
            <p class="mb-0" style="font-weight: bold">
              Welcome to our news section. Here you can find the highlights of the most recent news organized by our Mosque.
              You can find a complete list of current and past news on the official Facebook <a href="https://www.facebook.com/baisYEG" target="_blank">page</a> and on the
              <a target="_blank" href="https://www.facebook.com/groups/572986523475842/">group</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Start -->
    <!-- Blog Start -->
    <div class="container-fluid">
      <div class="container">
        <h1 class="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Latest From <span class="text-primary">Our News</span></h1>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-xl-4">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img src="/assets/img/blog-1.jpg" class="img-fluid w-100" alt="">
              </div>
              <div class="p-4">
                <div class="blog-meta d-flex justify-content-between pb-2">
                  <div class="">
                    <small><i class="fas fa-user me-2 text-muted"></i><a href="" class="text-muted me-2">By Admin</a></small>
                  </div>
                  <div class="">
                    <a href=""><i class="fas fa-bookmark text-muted"></i></a>
                  </div>
                </div>
                <a href="" class="d-inline-block h4 lh-sm mb-3">Weekend Maktab Registration form:</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScae5L6rftH3MXBSCossk7mQGCA9Skj1QT5Yh_fFBFc9cXsXA/viewform?pli=1" class="btn btn-primary px-3">Please Click</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img src="/assets/img/blog-1.jpg" class="img-fluid w-100" alt="">
              </div>
              <div class="p-4">
                <div class="blog-meta d-flex justify-content-between pb-2">
                  <div class="">
                    <small><i class="fas fa-user me-2 text-muted"></i><a href="" class="text-muted me-2">By Admin</a></small>
                  </div>
                  <div class="">
                    <a href=""><i class="fas fa-bookmark text-muted"></i></a>
                  </div>
                </div>
                <a href="" class="d-inline-block h4 lh-sm mb-3">Weekend Maktab Registration form:</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScae5L6rftH3MXBSCossk7mQGCA9Skj1QT5Yh_fFBFc9cXsXA/viewform?pli=1" class="btn btn-primary px-3">Please Click</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="blog-item wow fadeIn" data-wow-delay="0.1s">
              <div class="blog-img position-relative overflow-hidden">
                <img src="/assets/img/blog-1.jpg" class="img-fluid w-100" alt="">
              </div>
              <div class="p-4">
                <div class="blog-meta d-flex justify-content-between pb-2">
                  <div class="">
                    <small><i class="fas fa-user me-2 text-muted"></i><a href="" class="text-muted me-2">By Admin</a></small>
                  </div>
                  <div class="">
                    <a href=""><i class="fas fa-bookmark text-muted"></i></a>
                  </div>
                </div>
                <a href="" class="d-inline-block h4 lh-sm mb-3">Weekend Maktab Registration form:</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScae5L6rftH3MXBSCossk7mQGCA9Skj1QT5Yh_fFBFc9cXsXA/viewform?pli=1" class="btn btn-primary px-3">Please Click</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog End -->
  </div>
</template>

<script>
export default {
  name: "news.vue",
  auth:false,
  head() {
    return {
      title: "News | Baitul Aman"
    };
  },
}
</script>

<style scoped>

</style>
