import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";


const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          props.match.params.id
        }&apikey=${process.env.REACT_APP_LUL_KEY}`
      )
      .then(res => {
        let lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            props.match.params.id
          }&apikey=${process.env.REACT_APP_LUL_KEY}`
        );
      })
      .then(res => {
        let track = res.data.message.body.track;
        setTrack({ track });
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  