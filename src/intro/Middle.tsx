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
  const frame = useCurrentFrame()-10;
  const { fps } = useVideoConfig();
 
  const opacity = interpolate(frame, [8, 12], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})
  const cucc = spring({
    fps,
    frame,
    durationInFrames: 30,
    config: {
      stiffness: 40,
      overshootClamping: true
    }
  });

	return (
		<>
      <Container>
        <Line></Line>
        <Name
          style={{
            opacity: `${opacity}`,
            transform: `translateY(${100*(1-cucc)}%)`
          }}
        >
          {name}
        </Name>
      </Container>
		</>
	  );
};
