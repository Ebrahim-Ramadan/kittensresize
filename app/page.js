'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Base_URL = 'https://placekitten.com';

export default function Home() {
  const [width, setWidth] = useState(400); // Default width
  const [height, setHeight] = useState(300); // Default height


  return (
    <main className="flex min-h-screen md:flex-row flex-col items-center justify-around p-8 md:p-16">

      <div>
        <label
          htmlFor="customRangeWidth"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Width
        </label>
        <input
          type="range"
          className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
          min="50"
          max="700"
          step="10"
          id="customRangeWidth"
          value={width}
          onChange={(event)=>setWidth(event.target.value)}
        />
        <label
          htmlFor="width"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Height
        </label>
        <input
          type="range"
          className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
          min="50"
          max="550"
          step="10"
          id="height"
          value={height}
          onChange={(event)=>setHeight(event.target.value)}
        />
      </div>
      <Image
        className='rounded-lg'
        src={`${Base_URL}/${width}/${height}`}
        width={width||400}
        height={height||400}
        alt="smollkitten"
        isBlurred isZoomed
        fallbackSrc="https://http.cat/status/202"
      />
    </main>
  );
}
