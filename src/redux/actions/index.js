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

      const state = {
        rockSongs: data[0],
        popSongs: data[1],
        hipHopSongs: data[2],
      };
      dispatch({
        type: FILL_SONGS,
        payload: state,
      });

      console.log({ state });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const fillSongsAction = (artistName, category) => {
//   // this.setState({
//   //   [category]: [...this.state[category], songInfo[0]],
//   // });
//   return async (dispatch, getState) => {
//     // console.log("searchSet at fillJobsAction:", searchSet); // undefined
//     const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
//     try {
//       let url = baseUrl + artistName
//       // let url =
//       //   searchSet !== undefined ? baseUrl + "search=" + searchSet : baseUrl;
//       let resp = await fetch(url);
//       console.log("FETCHED:" + url);
//       if (resp.ok) {
//         let albums = await resp.json();
//         let albumData = albums.data[0]

//         console.log(albumData.album.title, "SONG INFO");

//         setTimeout(() => {
//           dispatch({
//             type: FILL_SONGS_LOADING,
//             payload: false,
//           });
//         }, 1000);
//         dispatch({
//           type: FILL_SONGS_ERROR,
//           payload: false,
//         });
//         dispatch({
//           type: FILL_SONGS,
//           payload: {albumData, catogory},
//           // category: {category, },
//         });
//       } else {
//         console.log("error");
//         setTimeout(() => {
//           dispatch({
//             type: FILL_SONGS_LOADING,
//             payload: false,
//           });
//         }, 1000);
//         setTimeout(() => {
//           dispatch({
//             type: FILL_SONGS_ERROR,
//             payload: true,
//           });
//         }, 1000);
//       }
//     } catch (error) {
//       console.log(error);
//       setTimeout(() => {
//         dispatch({
//           type: FILL_SONGS_LOADING,
//           payload: false,
//         });
//       }, 1000);
//       setTimeout(() => {
//         dispatch({
//           type: FILL_SONGS_ERROR,
//           payload: true,
//         });
//       }, 1000);
//     }
//   };
// };
