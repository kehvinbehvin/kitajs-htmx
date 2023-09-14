import Login from './components/login'
import Logout from './components/logout'
import Error from "./components/error"
import App from "./components/app"

import JSXRouter from "./router"

const router = new JSXRouter(Error);
router.get("/", App)
router.post("/login", Login)
router.post("/logout", Logout)

Bun.serve({
  port:3000,
  fetch(request) {
    return router.route(request);
  }
})

console.log("Bakery listening on port: 3000")