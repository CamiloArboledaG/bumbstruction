import Imagen from '../img/Imagen1.png';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Integrantes from './Integrantes';
import styled from "styled-components";
import {mobile} from "../../responsive";

const useStyles = makeStyles({
    tittle: {
        paddingBottom: "2rem",
        paddingTop: "1rem",
    }

});

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    margin:25px;
    ${mobile ({ flexWrap: "Wrap", margin:"15pxs"})}
`

const Image = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
`

const ImageContainer = styled.div`
    flex: 1;
    ${mobile ({flex:"none", width:"100%"})}
`

const TextContainer = styled.div`
    flex: 1;
    padding: 3rem;
    margin: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius:1.5%;
    border: 1px solid black;
    
    ${mobile ({width:"100%", padding: "25px 5px", margin:"1px", flex:"none", backgroundColor: "rgba(255, 255, 255, 0.5)"})}
`
const IntegrantesContainer = styled.div`
    ${mobile ({display:"none"})}
`

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Container>
            <ImageContainer>
                <Image src={Imagen} alt="Logo"/>
            </ImageContainer>
            <TextContainer>
                <div className={classes.tittle}>
                    <Typography variant="h3" align="center" >Sinopsis</Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" align="center">Un personaje víctima de un grupo mafioso decide saciar su sed de venganza, enfrentándose a ellos en diferentes partidas de bombardeos. Para ello tendrá que sobrevivir a sus contrincantes, acabar con sus enemigos y obtener recompensas en los enfrentamientos uno a uno con otros personajes online de la mafia.
                    </Typography>
                </div>
                <IntegrantesContainer>
                    <Integrantes/>
                </IntegrantesContainer>
            </TextContainer>
        </Container>
    );
}



