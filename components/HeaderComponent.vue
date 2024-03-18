<template>
  <header class="type-1">
    <div class="header-container">
      <div class="row px-0 gx-0">
        <div class="col-xl-2 rounded-lg  col-md-6 col-6">

        </div>
        <div class="col-xl-8 col-md-3 d-none d-xl-block align-center">
          <nav>
            <ul>
              <NuxtLink to="/home">
                <li class="menu-item-has-children">
                  <a><span data-hover="Home">Home</span></a>
                </li>
              </NuxtLink>
              <NuxtLink to="/albums/discography">
                <li class="menu-item-has-children">
                  <a><span data-hover="Discography">Discography</span></a></li>
              </NuxtLink>
              <NuxtLink to="/events/discography">
                <li class="menu-item-has-children">

                  <a href="#"><span data-hover="Events">Events</span></a>
                </li>
              </NuxtLink>
              <li><a href="gallery.html"><span data-hover="Gallery">Gallery</span></a></li>
              <NuxtLink to="/artists/discography">
                <li class="menu-item-has-children">
                  <a href="shop-page.html"><span data-hover="Shop">Artists</span></a>
                </li>
              </NuxtLink>
              <NuxtLink to="/news/discography">
                <li class="menu-item-has-children">
                  <a><span data-hover="News">News</span></a>
                </li>
              </NuxtLink>
              <li><a><span data-hover="Contact">Contact</span></a></li>
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
            <NuxtLink to="/home">
            <li class="menu-item-has-children">
              <a href="index.html"><span data-hover="Home">Home</span></a>
            </li>
            </NuxtLink>
            <NuxtLink to="/albums/discography">
            <li class="menu-item-has-children">
              <a><span data-hover="Discography">Discography</span></a></li>
              </NuxtLink>
            <NuxtLink to="/events/discography">
              <li class="menu-item-has-children">
                <a><span data-hover="Events">Events</span></a>
              </li>
            </NuxtLink>
            <li><a><span data-hover="Gallery">Gallery</span></a></li>
            <NuxtLink to="/artists/discography">
              <li class="menu-item-has-children">
                <a><span data-hover="Shop">Artists</span></a>
              </li>
            </NuxtLink>
            <NuxtLink to="/news/discography">
              <li class="menu-item-has-children">
                <a><span data-hover="News">News</span></a>
              </li>
            </NuxtLink>
            <li><a><span data-hover="Contact">Contact</span></a></li>
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