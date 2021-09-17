import {
  FILL_SONGS,
  FILL_SONGS_ERROR,
  FILL_SONGS_LOADING,
  SET_SELECTED,
} from "./index";
import { initialState } from "./index";
// const payload = (category === "rockSongs" ? { rockSongs: [...state.song.data.rockSongs, songInfo] }
//   : category === "popSongs")
const songReducer = (state = initialState.song, action) => {
  switch (action.type) {
    case FILL_SONGS:
      return {
        ...state,
        data: action.payload,
        data: {
          ...state.data,
          [action.category]: [[...action.category], action.payload],
        },
      };
    // this.setState({
    //   [category]: [...this.state[category], songInfo[0]],
    // });
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
      };

    default:
      return state;
  }
};

export default songReducer;
