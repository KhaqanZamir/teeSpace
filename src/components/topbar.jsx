import React from 'react';
import Button from './Button.jsx';

const Topbar = () => {

  const handleClick = () => {
    window.open("https://www.google.com");
    //  window.location.href = "https://www.google.com"; for same tab
  }

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center bg-linear-to-r from-lightGreen to-darkGreen py-2'>
        <div className='flex justify-center items-center'>
          <img src="src/assets/icons/icon-fire.png" alt="trending-fire" />
          <p className='font-semibold sm:font-bold text-sm sm:text-lg'>&nbsp;Free shipping on all U.S. orders $50+</p>
        </div>
        <Button 
          label="Shop Now" 
          disabled={false}
          type={'button'}
          variant={'primary'}
          onClick={() => handleClick()}
          style="sm:ml-4 font-semibold sm:font-bold mt-2 sm:mt-0 px-4 sm:px-6 py-2 text-xs sm:text-sm transition-all duration-200"
        />
    </div>
  );
};

export default Topbar;