import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <Container className="mt-3">
            <div className="mt-3"><Button size="lg" variant="outline-primary" as={Link} to='/carrusel'>
                        Carrusel
                    </Button></div>
            <div className="mt-3"><Button size="lg" variant="outline-secondary" as={Link} to='/alumno'>
                        Nombre
                    </Button></div>
            <div className="mt-3"><Button size="lg" variant="outline-success" as={Link} to='/curriculum'>
                        Curriculum
                    </Button></div>
            <div className="mt-3"><Button size="lg" variant="outline-warning" as={Link} to='/carrera'>
                        Carrera
                    </Button></div>
            <div className="mt-3"><Button size="lg" variant="outline-danger" as={Link} to='/mapa'>
                        Mapa
                    </Button></div>
            <div className="mt-3"><Button size="lg" variant="outline-dark" as={Link} to='/UTD'>
                        UTD
                    </Button></div>
                               
        </Container>
        </>
        
    );
}

export default Home;