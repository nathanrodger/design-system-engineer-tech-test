import CurrentTrack from "../current-track/current-track";
import { useDummyData } from "../../hooks/useDummyData";

const Player = () => {
    const { music } = useDummyData();

    return (
        <div>
            <CurrentTrack artist={ music.currentTrack.artist } song={ music.currentTrack.title }
                album={ music.currentTrack.album } art={ music.currentTrack.albumArt } />
            {/* <div>
                <button onClick={() => doAction("prevTrack")}>
                    <IoPlayBackOutline />
                </button>
                <button onClick={() => doAction("togglePlayState")}>
                    {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
                </button>
                <button onClick={() => doAction("nextTrack")}>
                    <IoPlayForwardOutline />
                </button>
            </div> */}
        </div>
    )
}

export default Player;