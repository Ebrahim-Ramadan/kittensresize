
import React , {useState} from 'react'
const YourCat_URL_Base = 'https://cataas.com/cat/says';

export const YourCat = () => {
    const [YourCatImg, setYourCatImg] = useState('');
    const [Name, setName] = useState('');
    const [isLoadingImage2, setIsLoadingImage2] = useState(false);

    const generateyourCat = () => {
        setIsLoadingImage2(true);
        const YourNewCat = `${YourCat_URL_Base}/${Name}`;
        const img = new Image();
        img.src = YourNewCat;
        img.onload = () => {
          setYourCatImg(YourNewCat);
          setIsLoadingImage2(false);
        };
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          generateyourCat();
        }
      };
  return (
   <>
    <div className='flex flex-col gap-2 mt-4'>
        <input
          placeholder='Whats your name?'
          className='bg-transparent outline-none border-none'
          onKeyDown={handleKeyPress}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={generateyourCat} className='border border-2 border-gray-400 p-2 text-sm rounded-lg'>Send me a cat</button>
      </div>
    <div>
        {!isLoadingImage2 ? (
          YourCatImg && (
            <img src={YourCatImg} alt={`${Name}'s cat`} />
          )
        ) : (
          <span className="loader"></span>
        )}
      </div></>

  )
}
