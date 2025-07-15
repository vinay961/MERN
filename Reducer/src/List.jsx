import React from 'react';

function List({ songs }) {
  const favoriteSongs = songs.filter(song => song.favorite);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎵 Favorite Songs</h1>
      {favoriteSongs.length === 0 ? (
        <p style={{alignItems:'center'}}>No favorite songs yet.</p>
      ) : (
        <ul>
          {favoriteSongs.map(song => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
