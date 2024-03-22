<template>
  <div>
    <div class="spacer-250 spacer-md-150 spacer-sm-120"></div>
    <div class="single-album-hero">
      <div class="container px-md-0 px-3">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="outer">
              <div class="inner">
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
            <img alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="spacer-120 spacer-md-90 spacer-sm-60"></div>
    <div class="single-album-content">
      <div class="container px-md-0 px-3">
        <h4>About Album</h4>
        <div class="spacer-30"></div>
        <p class="body-two">Twentyone Astronaut is the latest album from the talented artist, Fiddle. The album showcases Fiddle's musical abilities and creative genius, consisting of 21 tracks that each offer a unique style and atmosphere. The listener will be transported on a musical journey through the different sounds and emotions that the album presents. Released by Recordation, Twentyone Astronaut is sure to be a great addition to any music lover's collection. Each song is masterfully crafted, showcasing the depth and diversity of Fiddle's musical talent. From upbeat and energetic to contemplative and introspective, this album has something for everyone. Whether you're a long-time fan of Melodica or just discovering their music for the first time, Twentyone Astronaut is an album that you won't want to miss.</p>
        <br> <br>
        <p class="body-two">In "Twentyone Astronaut", Melodica takes listeners on a musical journey that explores the depths of the human experience. The album showcases the artist's musical range, moving from high energy tracks to introspective ballads, and everything in between. Each song is expertly crafted, displaying the depth of Fiddle's musical prowess and the emotional weight of the lyrics. The album is a testament to the artist's growth and evolution, as they continue to push the boundaries of what is possible in modern music. From the first track to the last, "Twentyone Astronaut" is a mesmerizing and unforgettable listening experience that will leave you in awe of Fiddle's talent and creativity.</p>
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