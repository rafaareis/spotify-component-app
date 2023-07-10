function Login() {
    const CLIENT_ID = "da62b598cc0a4d49ba05226c4218e055"
    const REDIRECT_URI = "http://localhost:5173"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    
    return (
        <div className="container-nav-logout">
            <a 
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                <h3>Login to Spotify</h3>
            </a>
        </div>
    )
}

export default Login