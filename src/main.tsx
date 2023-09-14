import loginHandler from './handlers/loginHandler'
import logoutHandler from "./handlers/logoutHandler"

import Dashboard from './components/dashboard'
import Error from "./components/error"
import App from "./components/app"

import JSXRouter from "./router"

const router = new JSXRouter(Error);
router.get("/", App)
router.post("/login", loginHandler)
router.post("/logout", logoutHandler)
router.post("/dashboard", Dashboard)

Bun.serve({
  port:3000,
  fetch(request) {
    return router.route(request);
  }
})

console.log("Bakery listening on port: 3000")