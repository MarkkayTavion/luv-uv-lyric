import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import Moment from "react-moment";

const Lyrics = () => {
  const { track_id } = useParams();
  const [track, setTrack] = useState();
  const [lyrics, setLyrics] = useState();
  console.log(track_id)
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          track_id}&apikey=${process.env.REACT_APP_LUL_KEY}`
      )
      .then(res => {
        let lyrics = res.data.message.body.lyrics.lyrics_body;
        setLyrics(lyrics);

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id
          }&apikey=${process.env.REACT_APP_LUL_KEY}`
        );
      })
      .then(res => {
        let track = res.data.message.body.track;
        setTrack(track);
      })
      .catch(err => console.log(err));
  }, [track_id]);
  if (
    track === undefined ||
    lyrics === undefined ) {
      return <Loading />
    } else {
  
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Return
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Music Genre</strong>:{" "}
            {track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">
              {track.first_release_date}
            </Moment>
          </li>
        </ul>
      </>
    );
            };
};

export default Lyrics;