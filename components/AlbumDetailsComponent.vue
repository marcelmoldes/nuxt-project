<template>
  <div>
    <div class="spacer-250 spacer-md-150 spacer-sm-120"></div>
    <div class="single-album-hero">
      <div class="container px-md-0 px-3">
        <div class="row">

          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="outer">

              <div class="">

                <div class="album-info">
                  <h3>{{ album.name}}</h3>
                  <div class="spacer-30"></div>
                  <span class="info">Producer: {{album.producer}}</span><br>
                  <span class="info">May 14, 2022</span>
                  <div class="spacer-45"></div>
                  <a href="#" class="button-two icon"><div class="button-wrapper"><span data-hover="Buy on Itunes">Buy on Itunes</span></div></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 mt-md-0 mt-5 album-poster">
            <img :src="'http://3.85.124.220:1337' + album.cover_album.data[0].attributes.url">
          </div>
        </div>
      </div>
    </div>
    <div class="spacer-120 spacer-md-90 spacer-sm-60"></div>
    <div class="single-album-content">
      <div class="container px-md-0 px-3">
        <h4>About Album</h4>
        <div class="spacer-30"></div>
        <p class="body-two">
          {{album.description
          }}</p>
     <MusicPlayerComponent  :album="album" ></MusicPlayerComponent>
      </div>
    </div>
  </div>
</template>
<script>
export default defineNuxtComponent({
  props: ['album']
})
</script>

<style scoped>

</style>