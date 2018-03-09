<template>
  <section class="container">
    <div class="content">
      <h1 class="title">
        NUXT
      </h1>
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
      
        <button type="submit" class="btn btn-outline-primary btn-block" >Submit</button>
      </form>
      <div class="mt-5 mb-3">
        Belum Punya Akun?
      </div>
      <a class="btn btn-dark btn-block" href="/auth/register">Daftar Sekarang</a>
      <div class="mt-5">
        <a class="text-secondary" href="/forgot/password" style="border-bottom: 1px solid" >Lupa Password</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
      // const { email, password } = this
      // const data = await this.$axios.$post('https://api-sm.s45.in/me/login', {email, password})
      // this.ip = data
      // console.log(this.ip)
      this.$toast.success("Logging in...").goAway(1500)
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
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
