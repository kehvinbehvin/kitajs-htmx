import Html from '@kitajs/html'

import Footer from './components/footer'
import Header from './components/header'
import Login from './components/login'
import Logout from './components/logout'
import Error from "./components/error"

import SimpleRouter from "./router"

function App() {
  return (
    <html lang="en">
        <head>
          <title>The Bakery</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://unpkg.com/htmx.org@1.9.4" integrity="sha384-zUfuhFKKZCbHTY6aRR46gxiqszMk5tcHjsVFxnUo8VMus4kHGVdIYVbOYYNlKmHV" crossorigin="anonymous"></script>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <Header />
        <Login />
        <Footer />
    </html>
  )
}

const router = new SimpleRouter;
router.register([
  {
    path: "/",
    options: {
      method: "GET",
      handler: App
    }
  },
  {
    path: "/login",
    options: {
      method: "POST",
      handler: Login
    }
  },
  {
    path: "/logout",
    options: {
      method: "POST",
      handler: Logout
    }
  }
])

const server = Bun.serve({
  port:3000,
  fetch(request) {
    console.log(`Incoming request ${request.url}`)
    const htmlResponse = router.route(request)

    if (htmlResponse !== null) {
      return new Response(htmlResponse(), {
        headers: {
          "Content-Type": "text/html"
        }
      })
    }

    return new Response(<Error />, {
      headers: {
        "Content-Type": "text/html"
      }
    })
  }
})

console.log("Bakery listening on port: 3000")