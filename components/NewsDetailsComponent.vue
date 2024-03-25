<template>
  <div class="single-news-hero">
    <div class="news-caption">
      <div class="container px-md-0 px-4">
        <span class="date">{{ article.publish_date }}</span>
        <div class="spacer-15"></div>
        <h4>{{ article.title }}<br>
        </h4>
        <div class="spacer-15"></div>
        <span class="category"><p class="body-two">{{article.description}}</p></span>
      </div>
    </div>
    <div class="image" style="background-image: url(assets/images/single-news.jpg);"></div>
  </div>

  <!-- NEWS CONTENT -->
  <div class="single-news-content">
    <div class="spacer-30 spacer-md-15"></div>
    <div class="container px-md-0 px-4">

    </div>
  </div>

  <!-- NEXT CONTENT-->
  <div class="spacer-90"></div>
  <div class="container px-md-0 px-4">
    <div class="next-content">
      <span class="body-three">NEXT CONTENT</span>

    </div>
  </div>

  <div class="spacer-90"></div>
    <div class="container px-md-0 px-4 box-animate">
      <div class="row g-0">
        <div class="col-xl-8 col-12">
          <h6>Write a Comment</h6>
          <div class="spacer-30"></div>
          <div id="contact-formular" class="contact-form">
            <form name="contactform" id="contactform" class="row gx-0">
              <!-- name -->
              <div class="col-xl-6">
                <input class="inp" placeholder="Your Name" name="name" type="text" id="name">
              </div>
              <!-- email -->
              <div class="col-xl-6">
                <input class="inp" placeholder="Your Email" name="email" type="text" id="email">
              </div>
              <!-- message -->
              <div class="col-xl-12">
                <textarea class="inp-text" name="comments" id="comments" rows="4" placeholder="Comment"></textarea>
              </div>
              <!-- button -->
              <div class="col-xl-12 form-btn text-center">
                <div class="spacer-30"></div>
                <input class="button-three" type="submit" value="Send it">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default defineNuxtComponent({
  props: ['article'],
})
</script>

<style>

</style>