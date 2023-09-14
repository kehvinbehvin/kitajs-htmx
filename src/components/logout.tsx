import Html from '@kitajs/html'

function Logout() {
    return (
        <div hx-post="/login" hx-swap="outerHTML" hx-trigger="click" hx-target="this">
            Logout
        </div>
    )
}

export default Logout