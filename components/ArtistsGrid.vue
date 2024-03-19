<template>
  <div>
    <div class="page-caption-2">
      <div class="caption-content">
        <div class="container">
          <h3>Our Members</h3>
          <p class="body-three">{{title}}</p>
        </div>
      </div>
      <div class="bg-image"></div>
    </div>
    <div class="container">
      <div class="spacer-90"></div>
      <div class="members-1" >
        <div class="spacer-90"></div>
        <div class="row gx-5" >
          <div class="col-xl-3 member" v-for="artist in artists" :key="artist">
            <figure>
              <img :src="'http://3.85.124.220:1337' + artist.attributes.artist_images.data[0].attributes.url" alt="team">
              <figcaption>
                <h6 class="name">{{artist.attributes.name}}</h6>
                <span class="job subheading">Guitarist</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
export default defineNuxtComponent({
  props: ['artists','title']
})
</script>


<style lang="scss" scoped>

</style>