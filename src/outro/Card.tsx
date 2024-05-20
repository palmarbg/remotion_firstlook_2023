import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import {Top} from "../card/Top"
import {Middle} from "../card/Middle"
import {Bottom} from "../card/Bottom"
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: calc(25%);
    background-color: #222;
    color: white;
    top: 0;
    border: 5px solid #111;
    `
const Hider = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #222;
    width: 100%;
  ` 

export const Card: React.FC<{name:string, src:string, index:number, length:number}>= ({name, src, index, length}) => {
  const topProps = {index: index, length: length}
  const middleProps = {name: name}
  const bottomProps = {src: src}

  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: "clamp"})
  const height = interpolate(frame, [10, 20], [60, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})

	return (
		<>
      <Container
        style={{
          left: `${index*25}%`,
          opacity: `${opacity}`
        }}
      >
        <Top {...topProps}/>
        <Middle {...middleProps}/>
        <Bottom {...bottomProps}/>
        <Hider
          style={{
            height: `${height}%`
          }}
        />
      </Container>
		</>
	  );
};
