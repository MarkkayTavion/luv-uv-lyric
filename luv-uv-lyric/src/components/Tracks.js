import React, { useContext } from 'react';
import { Context } from '../context';
import Loading from './Loading';
import Track from './Track';


const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Loading />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">Top 10 in the US!</h3>
        <div className="row">
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;


