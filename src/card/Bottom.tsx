import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import { Img } from "remotion";
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    height: 48%;
    width: 100%;
    top: 52%;
    background-color: #666;
    `

export const Bottom: React.FC<{src:string}> = ({src}) => {
  
	return (
		<>
      <Container>
        <Img
          style={{
            position: 'absolute',
            width: "80%",
            left: "10%",
            top: '10%'
          }}
          src={src}>
        </Img>
      </Container>
		</>
	  );
};
