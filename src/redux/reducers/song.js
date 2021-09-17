import { FILL_SONGS, FILL_SONGS_ERROR, FILL_SONGS_LOADING } from "./index";
import { initialState } from "./index";

const songReducer = (state = initialState.song, action) => {
  switch (action.type) {
    case FILL_SONGS:
      return {
        ...state,
        data: action.payload,
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
    default:
      return state;
  }
};

export default songReducer;
