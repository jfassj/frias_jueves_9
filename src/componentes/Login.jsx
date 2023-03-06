import React from 'react';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";

function Login() {

  const key_login = "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";

  const [user, setUser] = useState({});

  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: key_login,
      });
    }
    gapi.load("client:auth2", start)
  }, [])


  const logeado_exito = (respuesta_exitosa) => {
    console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
    setUser(respuesta_exitosa.profileObj);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }


  const fallo_login = (res) => {
    console.log("FALLO EN EL ACCESO:", res.profileObj);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'LAS CREDENCIALES SON ERRONEAS',
    })
  }
  return (
    <div className="center">
      <h1>CREDENCIALES DEL USUARIO</h1>
      <div className='btn'>
        <GoogleLogin
          clientId={key_login}
          onSuccess={logeado_exito}
          onFailure={fallo_login}
          buttonText="INGRESAR"
          cookiePolicy={"single_host_origin"}
        />
      </div>

      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <h3>{user.googleId}</h3>
      </div>

    </div>
  );
}
export default Login;