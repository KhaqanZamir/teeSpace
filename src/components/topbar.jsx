import React from 'react';
import Button from './Button.jsx';

const Topbar = () => {

  const handleClick = () => {
    window.open("https://www.google.com");
    //  window.location.href = "https://www.google.com"; for same tab
  }

  return (
    <div className='flex justify-center items-center bg-linear-to-r from-lightGreen to-darkGreen py-2'>
        <img src="src/assets/icons/icon-fire.png" alt="trending-fire" />
        <p className='font-bold text-lg'>&nbsp;Free shipping on all U.S. orders $50+</p>
        <Button 
          label="Shop Now" 
          disabled={false}
          type={'button'}
          variant={'primary'}
          onClick={() => handleClick()}
          style="ml-4 font-bold px-6 py-2 text-sm transition-all duration-200"
        />
    </div>
  );
};

export default Topbar;