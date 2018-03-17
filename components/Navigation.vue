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
            <a class="btn btn-sm nav-logout" href="#" @click="logout" >
              <i class="icon ion-log-out"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import logo from "~/static/lo-xs.png"
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
    },
    async logout() {
      try {
        const data = await this.$axios.$post(process.env.baseUrl + "logout")

        if (typeof data.access_token !== "undefined") {
          if (window.localStorage) {
            window.localStorage.setItem("userToken", null)
            window.localStorage.setItem("data", null)
            this.$store.commit("SET_USER", null)
          }
          console.log(data)
          this.$toast.success("logout berhasil!").goAway(1500)
          this.$router.replace("/")
        } else {
          this.$toast.error("logout gagal!").goAway(1500)
        }
      } catch (error) {
        console.log(Object.keys(error), error.response)
        this.$toast.error(error.response.statusText).goAway(2000)
      }
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
