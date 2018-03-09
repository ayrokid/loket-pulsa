<template>
  <div :style="{ backgroundImage: `url(${backgroundUrl})` }" class="bg">
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
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
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
