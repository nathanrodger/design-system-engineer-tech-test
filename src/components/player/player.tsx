import { useDummyData } from '../../hooks/useDummyData';
import Card from '@mui/material/Card';
import PlayerTrack from '../player-track/player-track';
import PlayerControl from '../player-control/player-control';

const Player = () => {
	const { music } = useDummyData();
	const isPlaying = music.playState === 'playing';

	function doAction(action: string) {
		console.log(action);
	}

	return (
		<>
			<h2>Music</h2>
			<Card sx={{maxWidth: {xs: '100%', sm: '360px'}}}>
				<p>{isPlaying ? 'Now playing' : 'Up next'}:</p>
				<PlayerTrack artist={music.currentTrack.artist} song={music.currentTrack.title}
					album={music.currentTrack.album} art={music.currentTrack.albumArt} />
				<PlayerControl isPlaying={isPlaying} handleAction={doAction} />
			</Card>
		</>
	)
}

export default Player;