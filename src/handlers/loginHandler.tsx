import Html from '@kitajs/html'
import Dashboard from '../components/dashboard'

export default function loginHandler() {
    console.log("Server side logic to log in user")
    const userDB = ["Kevin"]

    return(
        <Dashboard name={userDB[0]}/>
    )
}