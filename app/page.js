'use client'
import React, { useState } from 'react';
import Image from 'next/image';
const ImageSlider = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(200);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'width') {
      setWidth(value);
    } else if (name === 'height') {
      setHeight(value);
    }
  };

  const imageUrl = `https://placekitten.com/${width}/${height}`;

  return (
    <div>
      <h2>Image Slider</h2>
      <label>
        Width: {width}
        <input
          type="range"
          name="width"
          min="100"
          max="400"
          step="10"
          value={width}
          onChange={handleChange}
        />
      </label>
      <br />
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
      <br />
      <Image src={imageUrl} alt={`Kitten (${width}x${height})`}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageSlider;
