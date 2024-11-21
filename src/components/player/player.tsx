import Card from '@mui/material/Card';
import PlayerTrack from '../player-track/player-track';
import PlayerControl from '../player-control/player-control';

import { useDummyData } from '../../hooks/useDummyData';

const Player = () => {
    const { music } = useDummyData();
    const isPlaying = music.playState === 'playing';

    function doAction(action: string) {
        console.log(action);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <p>{isPlaying ? "Now playing" : "Up next"}:</p>
            <PlayerTrack artist={ music.currentTrack.artist } song={ music.currentTrack.title }
                album={ music.currentTrack.album } art={ music.currentTrack.albumArt } />
            <PlayerControl isPlaying={ isPlaying } handleAction={ doAction } />
        </Card>
    )
}

export default Player;