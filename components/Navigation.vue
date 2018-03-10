<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img :src="logo" width="30" height="30" class="d-inline-block align-top" alt="">
          {{ app }}
        </a>
        <div>
          <div :class="['network',online ? 'online' : 'offline']" class="float-left" >
            <div class="circle"/>
          </div>
          <div class="float-right">
            <a class="btn btn-sm nav-logout" href="#">
              <i class="icon ion-log-out"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import logo from "~/static/logo.png"
export default {
  components: {
    logo
  },
  data() {
    return {
      online: true,
      logo,
      app: process.env.app_name
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
  width: 30px;
  margin-top: 13px;
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
.nav-logout i {
  font-size: 25px;
}
</style>
