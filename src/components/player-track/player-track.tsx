import style from './player-track.module.scss'

interface playerTrackProps {
  artist: string,
  song: string,
  album: string,
  art: string,
}

const PlayerTrack = ({ artist, song, album, art }: playerTrackProps) => {
  return (
    <div>
      <img className={ style['image'] } src={art} alt={`${artist} - ${album} artwork`} />
      <div className={ style['content'] }>
        <h3 className={ style['title'] }>{song}</h3>
        <p>By: {artist}</p>
        <p>From: <small>{album}</small></p>
      </div>
    </div>
  )
}

export default PlayerTrack;
