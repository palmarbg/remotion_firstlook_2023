import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import {Top} from "./Top"
import {Middle} from "./Middle"
import {Bottom} from "./Bottom"
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

export const Card: React.FC<{name:string, src:string, index:number, length:number}>= ({name, src, index, length}) => {
  const topProps = {index: index, length: length}
  const middleProps = {name: name}
  const bottomProps = {src: src}

	return (
		<>
      <Container
        style={{
          left: `${index*25}%`
        }}
      >
        <Top {...topProps}/>
        <Middle {...middleProps}/>
        <Bottom {...bottomProps}/>
      </Container>
		</>
	  );
};
