import { staticFile, interpolate, useCurrentFrame, spring, Sequence, Easing, Video } from "remotion";
import {CardList} from "./CardList"
import styled from 'styled-components';

let Config = require('../config.json');

export const Outro: React.FC<{
	myData: {name:string, img:string}[],
	OUTRO_DURATION_IN_FPS: number
}> = (props) => {
  const frame = useCurrentFrame()

  const myLeft = interpolate(frame, [60, 80], [0, -75], {
    easing: Easing.bezier(.6,0,.4,1),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
	  <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: `${myLeft}%`
        }}
      >
	  	  <CardList {...props}/>
      </div>
      <Sequence from={80} durationInFrames={Config.SUBSCRIBE_DURATION_IN_FPS}>
        <Video
          style={{
            zIndex: 2,
            position: "absolute",
            width: "80%",
            left: "22%",
            top: "10%",
          }}
          src={staticFile("output.webm")}
        />
      </Sequence>
      
	  </>
	);
};
