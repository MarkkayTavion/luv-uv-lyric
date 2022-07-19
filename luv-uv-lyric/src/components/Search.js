import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../context"

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_LUL_KEY
        }`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Here you go!! <3" });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const findTrack = (event) => {
    event.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="card bg-dark card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> {`Luv Uv Lyric <3`}
      </h1>
      <p className="lead text-center">Search the lyrics of the songs music luv!</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control text-center form-control-lg"
            placeholder="Artist || Song"
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <div className="d-grid gap-2" >
        <button className="btn btn-dark btn-lg btn-block mb-5" type="submit">
          Get Lyrics
        </button>
        </div>
      </form>
    </div>
  );
};

export default Search;