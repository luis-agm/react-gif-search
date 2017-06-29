import React from 'react';

const GifItem = (props) => {
  return (
    <li>
      <img src={props.gif.url} alt='Animated GIF.'/>
    </li>
  )
};

export default GifItem;