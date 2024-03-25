<template>
  <div>
    <div>
      <div  class="single-artist-hero">
        <div class="outer">
          <div class="inner">
            <div class="container px-4 px-md-0">
              <div class="row">
                <div class="col-xl-6">
                  <div class="artist-info">

                    <div class="ml-2"></div>
                    <h3>{{ artist.name }}</h3>
                    <span>{{ artist.birth_date }}</span>
                    <div class="spacer-30"></div>
                    <div class="social-links">
                      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                      <a href="#"><i class="fa-brands fa-instagram"></i></a>
                      <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                    <div class="spacer-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      <div class="single-artist-content">
        <div class="container px-4 px-md-0">
          <h4>Biography</h4>
          <div class="spacer-30"></div>
          <p class="body-two">{{artist.biography}}</p>
          <div class="spacer-60"></div>



        </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  props: ['artist'],
})
</script>

<style >

</style>