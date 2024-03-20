<template>
  <div>
    <div class="contact-page">
      <div class="spacer-250"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <h2>Get in touch</h2>
            <div class="spacer-60"></div>
            <div class="contact-us offset-xl-1">
              <p class="body-two">feel free to contact us and we will get back to you as soon as we can.</p>
              <div class="spacer-15"></div>
              <div id="contact-formular" class="contact-form">
                <div id="message"></div>
                <form name="contactform" id="contactform" class="row gx-5">
                  <!-- message -->
                  <div class="col-xl-12">
                    <textarea class="inp-text" name="comments" id="comments"  placeholder="Comment"></textarea>
                  </div>
                  <!-- name -->
                  <div class="col-xl-12">
                    <input class="inp" placeholder="Your Name" name="name" type="text" id="name">
                  </div>
                  <!-- email -->
                  <div class="col-xl-12">
                    <input class="inp" placeholder="Your Email" name="email" type="text" id="email">
                  </div>
                  <!-- button -->
                  <div class="col-xl-12 form-btn text-center">
                    <div class="spacer-60"></div>
                    <button class="button-two" type="submit" ><div class="button-wrapper"><span data-hover="Send Message">Send Message</span></div></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-4 offset-xl-2">
            <div class="contact-info">
              <h6>Reach out to us</h6>
              <div class="spacer-45"></div>
              <span class="body-three info-title">address:</span>
              <div class="spacer-15"></div>
              <p class="body-three">Flat 12, The Grand Plaza, 123 High St, London, <br> UK, WC1 56789</p>
              <div class="spacer-45"></div>
              <span class="body-three info-title">Manager Phones:</span>
              <div class="spacer-15"></div>
              <p class="body-three">+44 20 123 4567 <br>+44 20 123 4568</p>
              <div class="spacer-45"></div>
              <span class="body-three info-title">Emails:</span>
              <div class="spacer-15"></div>
              <p class="body-three">events@fiddle.co <br>menager@fiddle.co</p>
            </div>
          </div>
        </div>
      </div>
      <div class="image" ></div>
    </div>

  </div>
</template>