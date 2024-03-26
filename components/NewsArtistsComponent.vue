<template>
  <div>
    <div>
      <div class="page-caption-2">
        <div class="caption-content">
          <div class="container">
            <h3>Article Artist</h3>
          </div>
        </div>
        <div class="bg-image"></div>
      </div>
      <div class="container">
        <div class="spacer-90"></div>
        <div class="members-1" >
          <div class="spacer-90"></div>
          <div class="row gx-5" >
            <div class="col-xl-3 member" v-for="artist in article.artists.data" :key="artist">
              <nuxt-link :to="`/artists/${artist.id}`">     <figure>
                <img :src="'http://api.basicocrm.com:1337' + artist.attributes.images.data[0].attributes.url" alt="team" v-if="artist.attributes.images.data">
                <figcaption>
                  <h6 class="name">{{artist.attributes.name}}</h6>
                </figcaption>
              </figure></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default defineNuxtComponent({
  props: ['article']
})
</script>



<style scoped>

</style>