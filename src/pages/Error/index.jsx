import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className="main errorPage">
            <h1>404 Error</h1>
            <h5>The page you're looking for does not exist.</h5>
            <Link to="/">Go back to home page</Link>
        </main>
    )
}

export default Error;