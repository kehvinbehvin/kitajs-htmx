import Html from '@kitajs/html'
import Login from '../components/login'

export default function logoutHandler(): JSX.Element {
    console.log("Server side logic to log out user")

    return (
        <Login />
    )
}