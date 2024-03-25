<template>
  <div>
    <div class="spacer-250 spacer-md-150 spacer-sm-120"></div>
    <div class="single-album-hero">
      <div class="container px-md-0 px-3">
        <div class="row">

          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="outer">
              <div class="inner">
                <div class="artist-info">
                  <h3>{{ artist.name }}</h3>
                  <span class="info">{{ artist.birth_date }}</span><br>
                  <div class="spacer-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 mt-md-0  ">
            <img :src="'http://3.85.124.220:1337' + artist.images.data[0].attributes.url">
          </div>
        </div>
      </div>

    </div>
    <div class="spacer-120 spacer-md-90 spacer-sm-60"></div>
    <div class="single-album-content">
      <div class="container px-md-0 px-3">
        <h4>About Artist</h4>
        <div class="spacer-30"></div>
        <p class="body-two">{{
            artist.biography
          }}</p>

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