interface currentTrackProps {
    artist: string,
    song: string,
    album: string,
    art: string,
}

const currentTrack = ({ artist, song, album, art }: currentTrackProps) => {
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

export default currentTrack;