import Html from '@kitajs/html'

function Dashboard({name}: Html.PropsWithChildren<{ name: string }>): JSX.Element {
    return (
        <div id="dashboard">
            <div>Welcome {name}</div>
            <div hx-post="/logout" hx-trigger="click" hx-target="#dashboard">Logout</div>
        </div>
    )
}

export default Dashboard