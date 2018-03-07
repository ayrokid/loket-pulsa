<template>
  <section class="container">
    <div>

      <h1 class="title">
        NUXT
      </h1>
      <form @submit.prevent="login">
        <div class="form-group">
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            <div class="invalid-feedback">
                Please choose a username.
            </div>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      
        <button type="submit" class="btn btn-outline-primary" >Submit</button>
    </form>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        loading: false
      }
    },
    mounted () {

    },
    methods: {
      login () {

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
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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
