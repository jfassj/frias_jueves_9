import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2';


function Login_Face() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
    
  }
  return (
    <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="3454417284833039"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
      </div>      
      );  
}

export default Login_Face;