<template>
  <section class="container">
    <div class="content">
      <logo/>
      <form @submit.prevent="login">
        <div class="form-group">
          <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
      
        <button type="submit" class="btn btn-secondary btn-block" >Login</button>
      </form>
      <div class="mt-5 mb-3">
        Belum Punya Akun?
      </div>
      <a class="btn btn-success btn-block" href="/auth/register">Daftar Sekarang</a>
      <div class="mt-5">
        <a class="text-light" href="/forgot/password" style="border-bottom: 1px solid" >Lupa Password</a>
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
      email: "",
      password: "",
      ip: 0,
      loading: false
    }
  },
  mounted() {},
  methods: {
    async login() {
      try {
        const { email, password } = this
        const data = await this.$axios.$post(process.env.baseUrl + "login", {
          email,
          password
        })

        if (typeof data.access_token !== "undefined") {
          if (window.localStorage) {
            window.localStorage.setItem("userToken", data.access_token)
            window.localStorage.setItem("data", JSON.stringify(data))
            this.$store.commit("SET_USER", JSON.stringify(data))
          }
          console.log(data)
          this.$toast.success("login berhasil!").goAway(1500)
          this.$router.replace("/menu")
        } else {
          this.$toast.error("login gagal!").goAway(1500)
        }
      } catch (error) {
        console.log(Object.keys(error), error.response)
        this.$toast.error(error.response.statusText).goAway(2000)
      }
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
.content {
  width: 100%;
  margin: 50px;
}

.links {
  padding-top: 15px;
}
</style>
