export default function({ $axios, redirect }) {
  // $axios.setToken('123', 'Bearer')
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
