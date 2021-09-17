// action.types
export const FILL_SONGS = "FILL_SONGS";
export const FILL_SONGS_LOADING = "FILL_SONGS_LOADING";
export const FILL_SONGS_ERROR = "FILL_SONGS_ERROR";

export const initialState = {
  song: {
    data: {},
    loading: true,
    error: false,
    selected: {}, // {title:...,image:...}
  },

  library: {
    favourites: [], // [{},{}] <== songs
  },
};

// https://striveschool-api.herokuapp.com/api/deezer/artist/1
// https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem
// https://striveschool-api.herokuapp.com/api/deezer/album/119606

// - Homepage, Album page, Artist page

// AT HOME.JSX:
// On first click, FILL_SONGS by initial fetch of the artists in the Home.jsx arrays rockArtists etc
// On subsequent clicks, GET STORE SONGS: [{}{}] and map them into ALbumCards

// - When clicking on a song, the name and the details should appear in the "player" section

// AT SONG.JSX
// SET_SONG: {}
// SET_SONG

// - Next to each song, you should be able to "Like" the song. From that moment on, wherever the song appears, the like "status" should be maintained

// AT SONG.JSX
// LIKES: []
// ADD_LIKE
// REMOVE_LIKE

// - [EXTRA] Save in the redux store the songs you retrieve from the APIs as well

// - [EXTRA] Be able to add songs to other playlists besides the playing queue

// - [EXTRA] Implement an UNDO functionality

// Agreed Initial State:-
