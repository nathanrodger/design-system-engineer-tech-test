interface playerTrackProps {
    artist: string,
    song: string,
    album: string,
    art: string,
}

const PlayerTrack = ({ artist, song, album, art }: playerTrackProps) => {
    return (
        <div>
            <img src={art} alt={ `${artist} - ${album} artwork` } />
            <div>
                <p>{song}</p>
                <p>by {artist}</p>
                <p>from {album}</p>
            </div>
        </div>
    )
}

export default PlayerTrack;