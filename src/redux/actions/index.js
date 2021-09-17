import {
  FILL_SONGS,
  FILL_SONGS_ERROR,
  FILL_SONGS_LOADING,
  SET_SELECTED,
} from "../reducers";

export const setSelectedAction = (song) => ({
  type: SET_SELECTED,
  payload: song,
});

export const fillSongsAction = (artistName, category) => {
  // this.setState({
  //   [category]: [...this.state[category], songInfo[0]],
  // });
  return async (dispatch, getState) => {
    // console.log("searchSet at fillJobsAction:", searchSet); // undefined
    const baseUrl =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    try {
      let url = baseUrl + artistName;
      // let url =
      //   searchSet !== undefined ? baseUrl + "search=" + searchSet : baseUrl;
      let resp = await fetch(url);
      console.log("FETCHED:" + url);
      if (resp.ok) {
        let albums = await resp.json();
        let albumData = albums.data[0];

        console.log(albumData.album.title, "SONG INFO");

        setTimeout(() => {
          dispatch({
            type: FILL_SONGS_LOADING,
            payload: false,
          });
        }, 1000);
        dispatch({
          type: FILL_SONGS_ERROR,
          payload: false,
        });
        dispatch({
          type: FILL_SONGS,
          payload: albumData,
          category: category,
        });
      } else {
        console.log("error");
        setTimeout(() => {
          dispatch({
            type: FILL_SONGS_LOADING,
            payload: false,
          });
        }, 1000);
        setTimeout(() => {
          dispatch({
            type: FILL_SONGS_ERROR,
            payload: true,
          });
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        dispatch({
          type: FILL_SONGS_LOADING,
          payload: false,
        });
      }, 1000);
      setTimeout(() => {
        dispatch({
          type: FILL_SONGS_ERROR,
          payload: true,
        });
      }, 1000);
    }
  };
};
