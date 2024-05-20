import {Composition} from 'remotion';
import MyData from "./MyData.json";
import {MyVideo} from './Video';

let Config = require('./config.json');

const myData = MyData.myData


export const RemotionRoot: React.FC = () => {
	const fps = Config.fps as number

	const INTRO_DURATION_IN_FPS = Config.INTRO_DURATION_IN_SECONDS * fps

  const startTime = INTRO_DURATION_IN_FPS + 20
  const endTime = startTime + Config.ONE_CARD_TIME_TO_MOVE_LEFT_IN_SECONDS * fps * myData.length

	return (
		<>
			<Composition
				id="MyVideo"
				component={MyVideo}
				durationInFrames={endTime}
				fps={fps}
				width={1920}
				height={1080}
			/>
		</>
	);
};
