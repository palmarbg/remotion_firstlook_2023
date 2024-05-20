import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  height: 12%;
  width: 100%;
  top: 40%;
  background-color: #ddd;
  `

const Line = styled.div`
  position: absolute;
  height: 25%;
  width: 100%;
  bottom: 0;
  background-color: #bbb;
  `

const Name = styled.h1`
  text-align: center;
  width: 100%;
  color: #222;
  font-family: Helvetica;
  font-size: 60px;
  margin-top: 4%;
  `
    
export const Middle: React.FC<{name:string}> = ({name}) => {
  

	return (
		<>
      <Container>
        <Line></Line>
        <Name>{name}</Name>
      </Container>
		</>
	  );
};
