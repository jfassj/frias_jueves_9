import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import utd from './imagenes/utd.png';
// import Home from './componentes/Home';
import Carrusel from "./componentes/carrusel";
import Curriculum from "./componentes/curriculum";
import Maps from "./mapas/mapas";
import Alumno from "./componentes/Alumno";
import Inicio from "./componentes/Inicio";
import Mockup from "./componentes/Mockup";
import Login from "./componentes/Login";
import Logout from "./componentes/Logout";
import LoginChido from "./componentes/LoginChido";
import LoginFace from "./componentes/LoginFace";

function App() {
  return (
    <Router>
      <div className="container mt-5">    
        <div className="btn-group">
         <Link to="/Inicio" className="btn btn-dark">
          INICIO
          </Link>
          <Link to="/Alumno" className="btn btn-dark">
          ALUMNO
         </Link>
         <Link to="/Mapa" className="btn btn-dark">
          MAPA
         </Link>
         <Link to="/Carrusel" className="btn btn-dark">
          CARRUSEL
         </Link>
         <Link to="/Curriculum" className="btn btn-dark">
          CURRICULUM
         </Link>
         <Link to="/Mockup" className="btn btn-dark">
          MOCKUP
         </Link>
         <Link to="/Login" className="btn btn-dark">
          LOGIN
         </Link>
         <Link to="/LoginChido" className="btn btn-dark">
          LOGIN CHIDO
         </Link>
         <Link to="/Logout" className="btn btn-dark">
          LOGOUT
         </Link> 
         <Link to="/LoginFace" className="btn btn-dark">
          LOGIN FACE
         </Link>         
        </div>
         <hr/>
          <Switch>
           <Route path="/Inicio" >
             <Inicio />
           </Route>
            <Route path="/Alumno">
              <Alumno />
           </Route>
           <Route path="/Mapa">
              <Maps />
           </Route>
           <Route path="/Carrusel">
              <Carrusel />
           </Route>
           <Route path="/Curriculum">
              <Curriculum />
           </Route>   
           <Route path="/Mockup">
              <Mockup/>
            </Route>
            <Route path="/Login">
                <Login/>
            </Route>
            <Route path="/LoginChido">
                <LoginChido/>
            </Route>
            <Route path="/Logout">
                <Logout/>
            </Route>
            <Route path="/LoginFace">
                <LoginFace />
            </Route>
          </Switch>
    </div>  
   </Router>
  );
}

export default App;
