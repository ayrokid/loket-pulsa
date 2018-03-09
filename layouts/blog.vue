<template>
  <div>
    <!-- Navigation -->
    <Navigation/>
    <!-- Content -->
    <div class="container content">
      <div class="row justify-content-md-center">
        <div class="col-md-9 col-lg-9">
          <!-- Content -->
          <!-- <Banner /> -->
          <nuxt/>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer fixed-bottom">
      <div class="row text-center">
        <div class="col">
          <a href="#">
            <i class="icon ion-home"/><br>Home
          </a>
        </div>
        <div class="col">
          <a href="#">
            <i class="icon ion-heart"/><br>Donasi
          </a>
        </div>
        <div class="col">
          <a href="#">
            <i class="icon ion-information-circled"/><br>Info
          </a>
        </div>
        <div class="col">
          <a href="#">
            <i class="icon ion-bag"/><br>History
          </a>
        </div>
        <div class="col">
          <a href="#">
            <i class="icon ion-person"/><br>Profile
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue"
import Banner from "~/components/Banner.vue"
export default {
  components: {
    Navigation,
    Banner
  }
}
</script>
