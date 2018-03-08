import test from "ava"
import { Nuxt, Builder } from "nuxt"
import { resolve } from "path"

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before("Init Nuxt.js", async t => {
  const rootDir = resolve(__dirname, "..")
  console.log(t)
  let config = {}
  try {
    config = require(resolve(rootDir, "nuxt.config.js"))
  } catch (e) {
    //
  }
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, "localhost")
})

// Example of testing only generated html
test("Route / exits and render HTML", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/", context)
  t.true(
    html.includes(
      '<a href="/auth/login" class="button--green" rel="noopener">Masuk</a>'
    )
  )
})

// Close the Nuxt server
test.after("Closing server", t => {
  console.log(t)
  nuxt.close()
})
