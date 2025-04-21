import React, { useReducer, useState } from 'react';
import './App.css';

const playlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [
        ...state,
        { id: Date.now(), title: action.payload, favorite: false }
      ];
    case 'REMOVE_SONG':
      return state.filter(song => song.id !== action.payload);
    case 'TOGGLE_FAVORITE':
      return state.map(song =>
        song.id === action.payload
          ? { ...song, favorite: !song.favorite }
          : song
      );
    default:
      return state;
  }
};

function App() {
  const [songs, dispatch] = useReducer(playlistReducer, []);
  const [songTitle, setSongTitle] = useState('');

  const handleAdd = () => {
    if (songTitle.trim()) {
      dispatch({ type: 'ADD_SONG', payload: songTitle });
      setSongTitle('');
    }
  };

  const totalFavorites = songs.filter(song => song.favorite).length;

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎶 Playlist Manager</h1>
      <input
        type="text"
        value={songTitle}
        onChange={e => setSongTitle(e.target.value)}
        placeholder="Enter song name"
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add Song</button>

      <h3>Total Songs: {songs.length}</h3>
      <h3>Favorites: {totalFavorites}</h3>

      <ul>
        {songs.map(song => (
          <li key={song.id} style={{ marginTop: '10px' }}>
            <span
              onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: song.id })}
              style={{
                cursor: 'pointer',
                fontWeight: song.favorite ? 'bold' : 'normal',
                color: song.favorite ? 'goldenrod' : 'black'
              }}
            >
              {song.title} {song.favorite && '⭐'}
            </span>
            <button
              onClick={() => dispatch({ type: 'REMOVE_SONG', payload: song.id })}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
