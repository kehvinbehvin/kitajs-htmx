import Html from '@kitajs/html'

import Footer from './footer'
import Header from './header'
import Login from './login'

function App(): JSX.Element {
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

export default App