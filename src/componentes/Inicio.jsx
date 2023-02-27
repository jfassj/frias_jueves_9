import { Col, Container, Row } from "react-bootstrap";
import React from "react";

function Alumno() {
    return ( 
        <>
        <Container>
            <Row>
                <Col>
                    <h1>MÉTODO RENDER</h1>
                    <p>El término “render prop” se refiere a una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función. Un componente con una render prop toma una función que devuelve un elemento de React y lo llama en lugar de implementar su propia lógica de representación.</p>
                </Col>
                <Col>
                    <h1>MÉTODO STRICT MODE</h1>
                    <p>El Modo Estricto o Strict Mode en JavaScript es una característica introducida en ECMAScript 5 (ES5), que indica al código que debe ser ejecutado en forma estricta. Esto previene que se tomen ciertas acciones, se muestren más errores, y vuelve a JavaScript más seguro.</p>
                </Col>
                <Col>
                    <h1>MÉTODO RETURN</h1>
                    <p>La sentencia return se emplea para salir de la secuencia de ejecución de las sentencias de un método y, opcionalmente, devolver un valor. Tras la salida del método se vuelve a la secuencia de ejecución del programa al lugar de llamada de dicho método.</p>
                </Col>
            </Row>
        </Container>
        </>
     );
}

export default Alumno;