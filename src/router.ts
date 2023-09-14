interface Options {
    handler: Function,
    method: string,
}

interface Routes {
    path: string,
    options: Options
}

export default class SimpleRouter {
    routeTable: Map<string, Options>;

    constructor() {
        this.routeTable = new Map()
    }

    register(routes: Array<Routes>) {
        routes.forEach(({path, options}) => {
            if (this.routeTable.has(path) && (this.routeTable.get(path)?.method === options.method)) {
                throw Error(`${options.method} ${path} already in use`)
            }
    
            this.routeTable.set(path, options)
        })
    }

    route(request: Request) {
        const url = new URL(request.url)
        const path = url.pathname
        const method = request.method

        if (!this.routeTable.has(path)) {
            return null
        }

        if ((this.routeTable.get(path)?.method !== method)) {
            return null
        }

        return this.routeTable.get(path)?.handler
    }

}