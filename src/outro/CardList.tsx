import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence, Easing } from "remotion";
import {Card} from "../card/Card"

export const CardList: React.FC<{
	myData: {name:string, img:string}[],
	OUTRO_DURATION_IN_FPS: number
  }> = ({myData, OUTRO_DURATION_IN_FPS}) => {
  return (
    <>
      {
        myData.slice(-4).map((elem, index) => {
          const props = {
            name: elem.name, 
            src: elem.img,
            index: index,
            length: 4
          }
          return <Card {...props}/>
        })
      }
    </>
  );
};