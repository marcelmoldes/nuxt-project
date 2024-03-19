<template>
  <div>
    <div class="page-caption-1">
      <div class="caption-content">
        <p class="body-three">Latest News</p>
        <div class="spacer-15"></div>
        <h3>Real Stories</h3>
      </div>
    </div>
    <div class="spacer-60 spacer-md-30 spacer-sm-0"></div>
    <div class="container" >
      <div class="spacer-30"></div>
      <div class="news" >
        <div class="row gx-6 gy-5">
          <div class="col-xl-4 col-md-4" v-for="article in news" :key="news">
            <a  class="news-item-2">
              <img :src="'http://3.85.124.220:1337' + article.attributes.news_images.data[0].attributes.url" alt="news">
              <span class="date">{{article.attributes.subtitle}}</span>
              <h6 class="title">{{article.attributes.title}} <br>Out Now</h6>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default defineNuxtComponent({
  props:['news']
})
</script>

<style scoped>

</style>


