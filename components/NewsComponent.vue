<template>
  <div class="spacer-150 spacer-md-90"></div>
  <div class="container px-0">
    <div class="notices">
      <div class="section-title row gx-0">
        <div class="col-xl-6">
          <h4 class="text-anime">Latest news</h4>
        </div>
        <div class="col-xl-6 right-area">
          <div class="link-outer">
            <NuxtLink to="/news">
              <a class="link-with-arrow text-red-800 text-lg font-bold" href="#"><span
                  data-hover="View all">View all</span></a>
            </NuxtLink>
          </div>
        </div>
        <hr class="clip-animation">
      </div>
      <div class="spacer-60 spacer-sm-15"></div>
      <div class="row px-0">
        <div v-for="article in news" :key="news" class="col-xl-4  col-md-4">
          <nuxt-link :to="`/news/${article.id}`">
            <div class="notices-item-1 px-2">
              <span class="date text-anime">{{ article.attributes.publish_date }}</span>
              <h6 class="title text-anime">{{ article.attributes.title }}</h6>

              <p class="body-three text-anime">{{ article.attributes.subtitle }}</p>
              <p class="body-three text-anime">{{ article.attributes.description }}</p>
              <a class=" text-gray-100 text-lg font-bold" href="#"><span
                  data-hover="View...">View more</span></a>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  props: ['news']
})
</script>
