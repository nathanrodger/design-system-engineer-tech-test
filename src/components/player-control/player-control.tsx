import {
	Button,
	Stack
} from '@mui/material';
import {
	FaPause,
	FaPlay,
	FaBackwardStep,
	FaForwardStep
} from 'react-icons/fa6';

interface playerControlProps {
	isPlaying: boolean,
	handleAction: (actionName: string) => void,
}

const PlayerControl = ({isPlaying, handleAction}: playerControlProps) => {
	return (
		<Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
			<Button variant="contained" size="medium" onClick={() => handleAction('prevTrack')}>
				<FaBackwardStep fontSize="large" />
			</Button>
			<Button variant="contained" size="medium" onClick={() => handleAction('togglePlayState')}>
				{isPlaying ? <FaPause fontSize="large" /> : <FaPlay fontSize="large" />}
			</Button>
			<Button variant="contained" size="medium" onClick={() => handleAction('nextTrack')}>
				<FaForwardStep fontSize="large" />
			</Button>
		</Stack>
	)
}

export default PlayerControl;