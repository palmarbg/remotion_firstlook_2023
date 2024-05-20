import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import {Card} from "./Card"
import styled from 'styled-components';

export const Intro: React.FC<{
      myData: {name:string, img:string}[],
      INTRO_DURATION_IN_FPS: number
    }> = ({myData, INTRO_DURATION_IN_FPS}) => {
	return (
		<>
      {
        myData.slice(0, 4).map((elem, index) => {

          const props = {
            name: elem.name, 
            src: elem.img,
            index: index,
            length: myData.length
          }
          return (
            <Sequence
              key={index}
              from={index*INTRO_DURATION_IN_FPS/4}
              durationInFrames={Infinity}
            >
              <Card {...props}/>
            </Sequence>
            )
        })
      }
		</>
	  );
};
