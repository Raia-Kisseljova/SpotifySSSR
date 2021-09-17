import { FILL_SONGS, FILL_SONGS_ERROR, FILL_SONGS_LOADING } from "../reducers";

const rockArtists = [
  "queen",
  "u2",
  "thepolice",
  "eagles",
  "thedoors",
  "oasis",
  "thewho",
  "bonjovi",
];

const popArtists = [
  "arianagrande",
  "maroon5",
  "onerepublic",
  "coldplay",
  "katyperry",
];

const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

const list = [rockArtists, popArtists, hipHopArtists];

export const fillSongsAction = () => {
  return async (dispatch, getState) => {
    try {
      const baseUrl =
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

      const data = await Promise.all(
        list.map(
          async (artistSet) =>
            await Promise.all(
              artistSet.map(async (artist) => {
                const response = await fetch(baseUrl + artist);
                const data = await response.json();
                return data.data;
              })
            )
        )
      );

      if (data) {
        const state = {
          rockSongs: data[0],
          popSongs: data[1],
          hipHopSongs: data[2],
        };
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
          payload: state,
        });
        // console.log({ state });
      } else {
        // console.log("error");
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
      // console.log(error);
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
