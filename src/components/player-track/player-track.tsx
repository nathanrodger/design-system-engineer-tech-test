import style from './player-track.module.scss'

interface playerTrackProps {
  artist: string,
  song: string,
  album: string,
  art: string,
}

const PlayerTrack = ({artist, song, album, art}: playerTrackProps) => {
  return (
    <div className={style['track']}>
      <img className={style['image']} src={art} alt={`${artist} - ${album} artwork`} />
      <div className={style['content']}>
        <h3 className={style['title']}>
          {song}
        </h3>
        <p className={style['artist']}>
          {artist}
        </p>
        <p className={style['album']}>
          <small>{album}</small>
        </p>
      </div>
    </div>
  )
}

export default PlayerTrack;
