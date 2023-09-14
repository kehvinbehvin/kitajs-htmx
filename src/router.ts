const GET = "GET";
const HEAD = "HEAD";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";
const PATCH = "PATCH";

export default class JSXRouter {
    routeTable: Map<string, Function>
    fallbackHandler: Function

    constructor(fallbackHandler: Function) {
        this.routeTable = new Map()
        this.fallbackHandler = fallbackHandler
    }

    get(path: string, handler: Function) {
        this.routeTable.set(GET + path, handler)
    }

    head(path: string, handler: Function) {
        this.routeTable.set(HEAD + path, handler)
    }

    post(path: string, handler: Function) {
        this.routeTable.set(POST + path, handler)
    }

    put(path: string, handler: Function) {
        this.routeTable.set(PUT + path, handler)
    }

    delete(path: string, handler: Function) {
        this.routeTable.set(DELETE + path, handler)
    }

    patch(path: string, handler: Function) {
        this.routeTable.set(PATCH + path, handler)
    }

    route(request: Request): Response {
        console.log(`Incoming request ${request.url}`)

        const url = new URL(request.url)
        const path = url.pathname
        const method = request.method

        const markupResponse = this.routeTable.has(method + path) ? this.routeTable.get(method + path)() : this.fallbackHandler()

        return new Response(markupResponse, {
            headers: {
                "Content-Type": "text/html"
            }
        })
    }

}