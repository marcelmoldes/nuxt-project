<template>
  <div>
    <div>
      <div class="page-caption-2">
        <div class="caption-content">
          <div class="container">
            <h3>Album Artists</h3>
          </div>
        </div>
        <div class="bg-image"></div>
      </div>
      <div class="container">
        <div class="spacer-90"></div>
        <div class="members-1">
          <div class="spacer-90"></div>
          <div class="row gx-5">
            <div v-for="artist in album.artists.data" :key="artist" class="col-xl-3 member">
              <nuxt-link :to="`/artists/${artist.id}`">
                <figure>
                  <img v-if="artist.attributes.images.data" :src="'http://3.85.124.220:1337' + artist.attributes.images.data[0].attributes.url"
                       alt="team">
                  <figcaption>
                    <h6 class="name">{{ artist.attributes.name }}</h6>

                  </figcaption>
                </figure>
              </nuxt-link>
            </div>
          </div>
        </div>
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