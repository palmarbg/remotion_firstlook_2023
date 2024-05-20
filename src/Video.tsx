import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import {CardList} from "./CardList";

export const MyVideo: React.FC = () => {
	return (
		<>
		  <AbsoluteFill
        style={{
        backgroundColor: "#222"
        }}
			>
        <CardList/>
			</AbsoluteFill>
		</>
	  );
};
