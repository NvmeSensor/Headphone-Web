'use client';
import React, { useState } from 'react';

const Hero = () => {
  const cards = [
    {
      image: '/headphone3.png',
    },
    {
      image: '/headphone.png',
    },
    {
      image: '/headphone5.png',
    },
  ];

  const [heroImage, setHeroImage] = useState('/headphone3.png');
  const [fade, setFade] = useState(false);

  const handleImageChange = (image) => {
    setFade(true);
    setTimeout(() => {
      setHeroImage(image);
      setFade(false);
    }, 500);
  };

  return (
    <section className='flex justify-center items-center w-full py-[100px] lg:py-0 lg:h-screen hero'>
      <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse items-center justify-center gap-5 w-[90vw] lg:w-[75vw]'>
        <div className='flex flex-col justify-center items-center gap-5 lg:gap-7'>
          <h1 className='text-5xl lg:text-7xl font-bold self-start gradient-text'>
            Listening Music <br />Becomes Fun
          </h1>
          <h2 className='text-xl font-medium self-start'>
            Get the experience of listening to music more to the fun and exciting
          </h2>
          <button className='px-6 py-3 font-semibold text-xl rounded-lg border-0 self-start transition-transform transform hover:scale-110 btn'>
            Shop Now
          </button>
          <div className='flex flex-wrap justify-start items-center gap-5 w-full'>
            {cards.map((card, index) => (
              <div key={index} onClick={() => handleImageChange(card.image)} className='h-[100px] w-[100px] p-2 rounded-lg cursor-pointer transition-transform transform hover:scale-110 card'>
                <img src={card.image} className='object-cover'/>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img 
            src={heroImage} 
            alt='hero' 
            className={`img ${fade ? 'fade-in' : ''}`} 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;