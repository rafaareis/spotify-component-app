import { useState, useEffect } from "react";

import Login from "./components/Login/Login"
import Form from "./components/Form/Form";

import './global.css';


function App() {


  const [token, setToken] = useState("");

      useEffect(() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token")
  
      if(!token && hash) {
          token = hash.substring(1).split("&").find(e => e.startsWith("access_token")).split("=")[1]
  
          window.location.hash=""
          window.localStorage.setItem("token", token)
          
      }
      setToken(token)
      }, [])
  
      const logout = () => {
          setToken("")
          window.localStorage.removeItem("token")
      }

  return (
    <div className="container">
      <nav className="container-nav">
        <div className="container-nav-title">
          <h1>Spotify React</h1>
        </div>
        
      

          {!token ?
            <Login />
            : (
              <div className="container-nav-logout">
                <a onClick={logout}><h3>Logout</h3></a>
              </div>
              )
          }


          {token ? 
            <Form token={token} />
              : (
              <div className="container-nav-form">
                <h3>Please Login</h3>
              </div>
              )
          }

      </nav>

    </div>
  )
}

export default App
