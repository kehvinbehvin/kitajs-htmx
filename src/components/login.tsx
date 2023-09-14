import Html from '@kitajs/html'

function Login(): JSX.Element {
    return (
        <div hx-post="/logout" hx-swap="outerHTML" hx-trigger="click" hx-target="this">
            Login
        </div>
    )
}

export default Login