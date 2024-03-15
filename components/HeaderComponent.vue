<template>
  <header class="type-1">
    <div class="header-container">
      <div class="row px-0 gx-0">
        <div class="col-xl-2 rounded-lg  col-md-6 col-6">
          <a class="cursor-pointer " href="index.html"><img class="rounded-md w-12" :src="'http://api.basicocrm.com:8055/assets/' + hero.header_logo" alt="logo"></a>
        </div>
        <div class="col-xl-8 col-md-3 d-none d-xl-block align-center">
          <nav>
            <ul>
              <li class="menu-item-has-children">
                <a href="index.html"><span data-hover="Home">Home</span></a>
              </li>
              <li class="menu-item-has-children">
                <a href="discography.html"><span data-hover="Discography">Discography</span></a>

              </li>
              <li class="menu-item-has-children">
                <a href="#"><span data-hover="Events">Events</span></a>
              </li>
              <li><a href="gallery.html"><span data-hover="Gallery">Gallery</span></a></li>
              <li class="menu-item-has-children">
                <a href="video-gallery.html"><span data-hover="Videos">Videos</span></a>

              </li>
              <li class="menu-item-has-children">
                <a href="shop-page.html"><span data-hover="Shop">Artists</span></a>

              </li>
              <li class="menu-item-has-children">
                <a href="shop-page.html"><span data-hover="News">News</span></a>

              </li>
              <li><a href="contact.html"><span data-hover="Contact">Contact</span></a></li>
            </ul>
          </nav>
        </div>
        <div class="col-xl-2 col-md-6 col-6">
          <div class="hamburger-menu mobile">
            <div class="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- OVERLAY MENU -->
  <div class="overlay-menu">
    <div class="close">
      <i class="ri-close-line"></i>
    </div>
    <div class="outer">
      <div class="inner">
        <nav>
          <ul>
            <li class="menu-item-has-children">
              <a href="index.html"><span data-hover="Home">Home</span></a>
            </li>
            <li class="menu-item-has-children">
              <a href="discography.html"><span data-hover="Discography">Discography</span></a>

            </li>
            <li class="menu-item-has-children">
              <a href="#"><span data-hover="Events">Events</span></a>
            </li>
            <li><a href="gallery.html"><span data-hover="Gallery">Gallery</span></a></li>
            <li class="menu-item-has-children">
              <a href="video-gallery.html"><span data-hover="Videos">Videos</span></a>

            </li>
            <li class="menu-item-has-children">
              <a href="shop-page.html"><span data-hover="Shop">Artists</span></a>

            </li>
            <li class="menu-item-has-children">
              <a href="shop-page.html"><span data-hover="News">News</span></a>

            </li>
            <li><a href="contact.html"><span data-hover="Contact">Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>


</template>
<script>
export  default  defineNuxtComponent({
  props:['hero']
})
</script>