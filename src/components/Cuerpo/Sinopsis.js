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
    flex-direction: column;
    align-items: center;
    margin:10rem;
    justify-content: space-between;
    ${mobile ({})}
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile ({ flexWrap: "Wrap", margin:"15px"})}
`

const ImageContainer = styled.div`
  max-height: 100%;
  background-color: rgba(226,156,156,0.5);
  margin: 2rem;
    border-radius: 25px;
  display: flex;
  ${mobile({ width: "100%", height: "100%", margin: "5px" })}
`;
const Image = styled.img`
    width: 500px;
  height: 100%;
  ${mobile({ width: "80vw" })}
`;

const TextContainer = styled.div`
    padding: 3rem;
    background-color: rgba(156, 226, 226, 0.5);
    border-radius:25px;
    
    ${mobile ({width:"80vw", padding: "5px", margin:"5px", flex:"none",})}
`
const IntegrantesContainer = styled.div`
    flex: 1;
    background-color: rgba(191, 226, 156, 0.5);
    border-radius:25px;
    ${mobile ({display:"none"})}
`

export default function Sinopsis() {
    const classes = useStyles();
    return (
        <Container>
        <Wrapper>
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
            </TextContainer>

        </Wrapper>
                <IntegrantesContainer>
                    <Integrantes/>
                </IntegrantesContainer>
        </Container>
    );
}



