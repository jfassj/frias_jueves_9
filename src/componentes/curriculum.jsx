import cv from "../imagenes/cv.png"
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cv = () => {
    return(
        <>
        <Container>
                    <Button variant="primary" as={Link} to='/Home'>
                        Regresar
                    </Button> 
        </Container>
        <Container className="mt-3">
            <Row>
                <Col>
                     
                </Col>
                <Col>
                    <img src={cv}></img>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        </>
        
    );
}

export default Cv;