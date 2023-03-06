import React, {useState, useEffect} from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";

function LoginChido() {
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }

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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Entrar
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Registrar
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Iniciar Sesión con:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="my-facebook-button-class"
                  icon="fa-facebook"
                  textButton=""
                />  

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#fff' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

                <GoogleLogin
                  clientId={key_login}
                  onSuccess={logeado_exito}
                  onFailure={fallo_login}
                  cookiePolicy={"single_host_origin"}
                  icon="fa-google"
                  buttonText=""
                />

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#fff' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Correo Electronico' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuerdame' />
            <a href="!#">¿Olvidaste tu contraseña?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Ingresar</MDBBtn>
          <p className="text-center">¿No estás registrado? <a href="#!">Registrate</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Ingresar con:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#fff' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
                <FacebookLogin
                appId="3454417284833039"
                autoLoad={false}
                fields="name,email,picture"       
                callback={responseFacebook} />   
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#fff' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#fff' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#fff' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">O:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Nombre' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Usuario' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Correo Electronico' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Estoy de acuerdo con los terminos y condiciones' />
          </div>

          <MDBBtn className="mb-4 w-100">Ingresar</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>
      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <h3>{user.googleId}</h3>
      </div>
    </MDBContainer>
    
  );
}

export default LoginChido;