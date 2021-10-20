import React from "react";
import "./login.css";

function Login(){
    return(
        <div className="login-component">
            <div className="formulario">
                <label>Usuario                    
                    <input type="text" placeholder="Usuario o email"/>
                </label>
                <label>
                    Password
                    <input  type="password" placeholder="Contraseña"/>
                </label>
            </div>
            <div>
                <button>Login</button>
                <button>Registrarse</button>
            </div>
        </div>
    );
}

export default Login;