'use client'

// components/ImageSlider.js
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(200);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const newImageUrl = `https://placekitten.com/${width}/${height}`;
    const img = new Image();
    img.src = newImageUrl;
    img.onload = () => {
      setImageUrl(newImageUrl);
      setIsLoading(false);
    };
  }, [width, height]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'width') {
      setWidth(value);
    } else if (name === 'height') {
      setHeight(value);
    }
  };

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt={`Kitten (${width}x${height})`} />
      )}
    </div>
  );
};

export default ImageSlider;
