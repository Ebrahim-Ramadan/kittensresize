'use client'

import React, { useState, useEffect } from 'react';
const Base_URL = 'https://placekitten.com'

const ImageSlider = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(200);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const newImageUrl = `${Base_URL}/${width}/${height}`;
    const img = new Image();
    img.src = newImageUrl;
    img.onload = () => {
      setImageUrl(newImageUrl);
      setIsLoading(false);
    };
    //generating a new image with the changed attrs everytime the width or height changes instead of changing the src only with direct event
  }, [width, height]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'width':
        setWidth(value);
        break;
      case 'height':
        setHeight(value);
        break;
    }
  };

  return (
    <div className='flex md:flex-row flex-col gap-4 md:p-16 p-8'>
      <div className='flex flex-col'>
      <label>
        Width: {width}
        <input
          type="range"
          name="width"
          min="100"
          max="600"
          step="10"
          value={width}
          onChange={handleChange}
        />
      </label>
      <label>
        Height: {height}
        <input
          type="range"
          name="height"
          min="200"
          max="600"
          step="10"
          value={height}
          onChange={handleChange}
        />
      </label>
</div>
      {isLoading ? (
        <span class="loader"></span>
      ) : (
        <img src={imageUrl} alt={`Kitten (${width}x${height})`} />
      )}
    </div>
  );
};

export default ImageSlider;
