import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
        <Stack spacing={ 3 } direction="row">
            <Button variant="contained" size="medium" onClick={() => handleAction("prevTrack")}>
                <FaBackwardStep fontSize="large" />
            </Button>
            <Button variant="contained" size="medium" onClick={() => handleAction("togglePlayState")}>
                {isPlaying ? <FaPause fontSize="large" /> : <FaPlay fontSize="large" />}
            </Button>
            <Button variant="contained" size="medium" onClick={() => handleAction("nextTrack")}>
                <FaForwardStep fontSize="large" />
            </Button>
        </Stack>
    )
}

export default PlayerControl;