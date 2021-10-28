import ReactPlayer from "react-player";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({height: "100vh" })}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${mobile({ flexDirection:"column-reverse" })}
`;

const ContainerVideo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  margin: 15px;
  padding: 15px;
  border-radius: 30px;
`;

const Tittle = styled.h1`
  font-weight: 500;
  font-size: 55px;
  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.h3`
  font-weight: 300;
  font-size: 20px;
`;

const Demo = (props) => {
  return (
    <Container>
      <Wrapper>
        <ContainerVideo>
          <ReactPlayer
            url={props.link}
            width="95%"
            height="95%"
            playing
            loop
            playbackRate={1.75}
          />
        </ContainerVideo>

        <ContainerDesc>
          <Tittle>Primer Demo</Tittle>
          <Desc>
            El primer demo contiene un NPC enemigo, se aprecian los botones para
            usarlo en dispositivos moviles, se aprecia el puntaje en la parte
            superior.
          </Desc>
        </ContainerDesc>
      </Wrapper>
    </Container>
  );
};

export default Demo;
