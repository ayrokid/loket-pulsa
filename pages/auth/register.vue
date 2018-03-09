<template>
  <section class="container">
    <div class="content">
      <logo/>
      <form @submit.prevent="login">
        <div class="form-group">
          <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            Please choose a email.
          </div>
        </div>
      
        <button type="submit" class="btn btn-secondary btn-block" >Daftar</button>
      </form>
      <div class="mt-5 mb-4">
        <a class="btn btn-success" href="/auth/login">Login Sekarang</a>
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

.links {
  padding-top: 15px;
}
</style>
