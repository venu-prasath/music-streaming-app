const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    const newSongs = songs.map((sg) => {
      if (song.id == sg.id) {
        return {
          ...sg,
          active: true,
        };
      } else {
        return {
          ...sg,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
