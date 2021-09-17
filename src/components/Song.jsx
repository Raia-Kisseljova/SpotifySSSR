import React from "react";
import { AiOutlineHeart, AiFillPlayCircle} from "react-icons/ai";
import { connect } from "react-redux";
import { useEffect } from "react";
import { setSelectedAction, setFavouriteAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  selected: state.song.selected,
  favourites: state.library.favourites,
});
const mapDispatchToProps = (dispatch) => ({
  setSelected: (song) => dispatch(setSelectedAction(song)),
  setFavourite: (song) => dispatch(setFavouriteAction(song)),
  // here we will add favourite, delete favourite and set a song playing
});

const Song = ({selected, setSelected, setFavourite, track, favourites}) => {

  useEffect(()=> {
    console.log("SELECTED=>",selected)
    console.log("FAVOURITE=>",favourites)
  }, [selected, favourites] )

  const isFavourite = favourites.includes(track.title)

  return (
    <div className='py-3 trackHover'>
      <AiFillPlayCircle className='play-circle' onClick={() => setSelected(track)} />
      <span className='card-title trackHover px-3' style={{ color: "white" }}>
        {track.title}
      </span>
      {isFavourite ? <AiOutlineHeart className='like-gold' />:<AiOutlineHeart className='like' onClick={() => setFavourite(track)} />}
      <small className='duration' style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);

