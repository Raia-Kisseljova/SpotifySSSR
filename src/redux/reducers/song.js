import { FILL_SONGS, FILL_SONGS_ERROR, FILL_SONGS_LOADING, SET_SELECTED } from "./index";
import { initialState } from "./index";
// const payload = (category === "rockSongs" ? { rockSongs: [...state.song.data.rockSongs, songInfo] }
//   : category === "popSongs")

// export const initialState = {
//   song: {
//     data: {},
//     loading: true,
//     error: false,
//     selected: {}, // {title:...,image:...}
//   },

//   library: {
//     favourites: [], // [{},{}] <== songs
//   },
// };


const songReducer = (state = initialState.song, action) => {
  switch (action.type) {
    case FILL_SONGS:
      return {
        ...state,
        data: action.payload,
      };
    case FILL_SONGS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case FILL_SONGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case SET_SELECTED: 
      return {
        ...state,
        selected: action.payload,
      }
    default:
      return state;
  }
};

export default songReducer;
