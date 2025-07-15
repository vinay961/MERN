
const playlistReducer = (state, action) => { // here we are not passing the initial state, because we are passing it in the useReducer hook
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
      case 'SHOW_FAVORITES':
        return state.filter(song => song.favorite);

      default:
        return state;
    }
};

export default playlistReducer;