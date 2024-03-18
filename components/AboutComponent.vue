<template>
  <div class="container">
    <div class="about">
      <div class="spacer-150 spacer-md-60 spacer-sm-45"></div>
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <div class="text-anime">
            <h4 class="purple-gradient text-xl">{{ title }}</h4>
            <hr class="mt-2 w-44">
          </div>
          <div class="spacer-60 spacer-sm-30"></div>
          <p class="text-anime p-0">
            {{subtitle}}
          </p> <br>
          <p class="text-anime p-0">
  {{description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default defineNuxtComponent({
  props: ['title','subtitle','description']
})
</script>
