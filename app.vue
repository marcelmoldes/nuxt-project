<template class="">
    <NuxtLayout>
      <main id="main" data-barba="container">
        <NuxtPage />
      </main>
    </NuxtLayout>
  <header-component></header-component>
<footer-component></footer-component>

</template>
<script>
export default defineNuxtComponent({
 mounted() {
   let script = document.createElement('script');
   script.src = '/assets/js/main.js'
   document.head.appendChild(script);
 }
})
</script>