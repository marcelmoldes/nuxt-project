<template>
  <div class="container">
    <div class="discography-1">
      <div class="spacer-150 w-20 spacer-md-90"></div>
      <h4 class="align-center text-anime">Discography</h4>
      <div class="spacer-150 spacer-md-90"></div>
      <div class="swiper discography-slider" data-delay=".2">
        <div class="swiper-wrapper">
          <div v-for="album in albums" :key="album" class="swiper-slide image-anime ">

            <nuxt-link :to="`/albums/${album.id}`">
              <img :src="'http://3.85.124.220:1337' + album.attributes.image.data[0].attributes.url"
                   class="ml-52"
                   width=""/>
            </nuxt-link>
          </div>
        </div>
        <div class="arrows">
          <svg class="left-arrow" fill="none" height="16" viewBox="0 0 62 16" width="62"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928937C7.68054 0.538413 7.04738 0.538413 6.65685 0.928937L0.292892 7.2929ZM62 7L1 7.00001L1 9.00001L62 9L62 7Z"
                fill="white"/>
          </svg>
          <svg class="right-arrow" fill="none" height="16" viewBox="0 0 62 16" width="62"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M61.7071 7.2929C62.0976 7.68342 62.0976 8.31659 61.7071 8.70711L55.3431 15.0711C54.9526 15.4616 54.3195 15.4616 53.9289 15.0711C53.5384 14.6805 53.5384 14.0474 53.9289 13.6569L59.5858 8.00001L53.9289 2.34315C53.5384 1.95263 53.5384 1.31946 53.9289 0.928937C54.3195 0.538413 54.9526 0.538413 55.3431 0.928937L61.7071 7.2929ZM8.74228e-08 7L61 7.00001L61 9.00001L-8.74228e-08 9L8.74228e-08 7Z"
                fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default defineNuxtComponent({
  props: ['albums']
})
</script>