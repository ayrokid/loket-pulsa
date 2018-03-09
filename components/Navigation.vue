<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">Nuxtjs Project</a>
        <div :class="['network',online ? 'online' : 'offline']">
          <div class="circle"/>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
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

<style>
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
