import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GoogleMaps from "simple-react-google-maps";

export default class Maps extends Component{
    render(){
        return(
            <Container>
                <GoogleMaps
                    apiKey={"AIzaSyCCN_u-yFZhEsxuQf1qkaykVhJpG05TuUA"}
                    style={{height: "400px", width: "100%"}}
                    zoom={15}
                    center={{lat: 23.990824044350262, lng: -104.61766663068158}}
                    markers={{lat: 23.990824044350262, lng: -104.61766663068158}}/>
            </Container>
        )
    }
}