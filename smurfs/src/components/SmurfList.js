import React from "react";
 import Smurf from './Smurf'

const SmurfList = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurf  key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf} />;
      })}
    </ul>
  );
};

export default SmurfList;
