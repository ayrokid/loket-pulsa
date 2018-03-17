export default function({ $axios, redirect }) {
  /*   if (window.localStorage.getItem("userToken")) {
    const token = window.localStorage.getItem("userToken")
    $axios.setToken(token, "Bearer")
  } */
  $axios.baseURL = "http://api.zakatkasih.org/v1/"

  $axios.onRequest(config => {
    console.log("Making request to " + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect("/400")
    }
  })
}
