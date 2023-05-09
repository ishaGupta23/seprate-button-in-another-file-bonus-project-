import React from 'react';

export default function Button(props) {
  return (
    <button
      type="button"
      style={{ padding: '1rem', width: '6rem', borderRadius: '1rem' , color:"red" }}
    >
      {props.buttonName}

     

    </button>
  );
}
