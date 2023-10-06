'use client'
import React, { useState, useEffect } from 'react';
import { YourCat } from './YourCat';

const Base_URL = 'https://placekitten.com';

const ImageSlider = () => {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(300);
  const [isLoadingImage1, setIsLoadingImage1] = useState(false);
  const [imageUrl, setImageUrl] = useState('');


  useEffect(() => {
    setIsLoadingImage1(true);
    const newImageUrl = `${Base_URL}/${width}/${height}`;
    const img = new Image();
    img.src = newImageUrl;
    img.onload = () => {
      setImageUrl(newImageUrl);
      setIsLoadingImage1(false);
    };
  }, [width, height]);



  return (
    <div className='flex md:flex-row flex-col gap-8 md:p-16 p-8'>
      <div className='flex flex-col [&>*]:flex [&>*]:gap-y-1 [&>*]:flex-col gap-4 md:w-[250px]'>
        <div>
          <label>Width: {width}</label>
          <input
            type="range"
            name="width"
            min="100"
            max="600"
            step="5"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>

        <div>
          <label>Height: {height}</label>
          <input
            type="range"
            name="height"
            min="200"
            max="600"
            step="5"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      {isLoadingImage1 ? (
        <span className="loader"></span>
      ) : (
        <img src={imageUrl} alt={`Kitten (${width}x${height})`} className='object-contain' />
      )}
      
      <YourCat/>
    </div>
  );
};

export default ImageSlider;
