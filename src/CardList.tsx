import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence, Easing } from "remotion";
import MyData from "./MyData.json";
import {Card} from "./card/Card"
import {Intro} from "./intro/Intro"
import {Outro} from "./outro/Outro"

let Config = require('./config.json');

const myData = MyData.myData

export const CardList: React.FC = () => {
  const { fps, durationInFrames, width, height} = useVideoConfig();
  const frame = useCurrentFrame();

  const INTRO_DURATION_IN_FPS = Config.INTRO_DURATION_IN_SECONDS * fps
  const OUTRO_DURATION_IN_FPS = Config.OUTRO_DURATION_IN_SECONDS * fps

  const startTime = INTRO_DURATION_IN_FPS + 20
  const endTime = startTime + Config.ONE_CARD_TIME_TO_MOVE_LEFT_IN_SECONDS * fps * (myData.length-4)

  const myVar = (myData.length-4)*25*(-1)
  const myLeft = interpolate(frame, [startTime, endTime], [0, myVar], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

	return (
		<>
      <Sequence name="Intro" durationInFrames={INTRO_DURATION_IN_FPS}>
        <Intro {...{myData, INTRO_DURATION_IN_FPS}}/>
      </Sequence>
      <Sequence name="Slide" from={INTRO_DURATION_IN_FPS} durationInFrames={endTime-INTRO_DURATION_IN_FPS}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: `${myLeft}%`
          }}
        >
          {myData.map((elem, index) => {
            const props = {
              name: elem.name, 
              src: elem.img,
              index: index,
              length: myData.length
            }
            return <Card key={index} {...props}/>
          })}
        </div>
      </Sequence>
      <Sequence name="Outro" from={endTime} durationInFrames={OUTRO_DURATION_IN_FPS}>
        <Outro {...{myData, OUTRO_DURATION_IN_FPS}}/>
      </Sequence>
		</>
	  );
};


//
