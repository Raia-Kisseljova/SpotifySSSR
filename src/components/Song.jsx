import React from "react";
import { connect } from "react-redux";
import {setSelectedAction} from "../redux/actions"

const mapStateToProps = (state) => ({
  selected: song.selected,
  favourites: library.favourites
  // here we will gather redux store favourites and redux store song_playing
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (song) => dispatch(setSelectedAction(song))
  // here we will add favourite, delete favourite and set a song playing
});

const Song = ({ track }) => (
  <div className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
