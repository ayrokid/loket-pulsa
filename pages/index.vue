<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h3 class="subtitle">
        PWA Vue.js Application
      </h3>
      
      <div class="links">
        <a href="/auth/login" class="button--green" rel="noopener">Masuk</a>
        <a href="/auth/register" class="button--grey" rel="noopener">Daftar</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue"

export default {
  components: { Logo },
  data() {
    return {
      online: true
    }
  },
  mounted() {
    if (!window.navigator) {
      this.online = false
      return
    }
    console.log("data", process.env.baseUrl)
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener("offline", this._toggleNetworkStatus)
    window.addEventListener("online", this._toggleNetworkStatus)
  },
  destroyed() {
    window.removeEventListener("offline", this._toggleNetworkStatus)
    window.removeEventListener("online", this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === "online"
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.network {
  font-weight: 400;
  font-size: 1rem;
}

.network .circle {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: green;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.network.offline .circle {
  background: red;
}
</style>
