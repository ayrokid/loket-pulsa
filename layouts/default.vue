<template>
  <!-- <div :style="{ backgroundImage: `url(${backgroundUrl})` }" class="bg"> -->
  <div class="bg">
    <nuxt/>
  </div>
</template>
<script>
import backgroundUrl from "~/assets/blue.png"
export default {
  data() {
    return {
      backgroundUrl
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #ffffff;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.bg {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #ffffff;
  background-color: #35495e;
}
</style>
