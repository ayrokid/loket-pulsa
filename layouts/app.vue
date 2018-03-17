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
          <a href="/beli">
            <i class="icon ion-ios-cart"/><br>Beli
          </a>
        </div>
        <div class="col">
          <a href="/topup">
            <i class="icon ion-ios-speedometer"/><br>Top Up
          </a>
        </div>
        <div class="col">
          <a href="/harga">
            <i class="icon ion-information-circled"/><br>Harga
          </a>
        </div>
        <div class="col">
          <a href="/history">
            <i class="icon ion-ios-clock"/><br>History
          </a>
        </div>
        <div class="col">
          <a href="/setting">
            <i class="icon ion-ios-gear"/><br>Setting
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
