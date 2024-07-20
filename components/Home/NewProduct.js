import React from 'react';

const NewProduct = () => {

  return (
    <section className='flex justify-center items-center w-full py-16'>
      <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse items-center justify-center gap-5 w-[90vw] lg:w-[75vw]'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-3xl lg:text-4xl font-semibold self-start'>
            The Latest Headphones With <br/> The Latest Technology
          </h1>
          <h2 className='text-xl font-medium self-start'>
            The latest product that we have is a headphone with the latest technology that can make you comfortable listening to music
          </h2>
          <button className='px-5 py-2 font-semibold text-xl rounded-lg border-0 self-start transition-transform transform hover:scale-110 btn'>
            View Specifications
          </button>
        </div>
        <div className='flex justify-center items-center rounded-xl lg:rounded-full imgcard'>
          <img 
            src='/headphone3.png' 
            alt='hero' 
            className='max-h-[400px] transition-transform transform hover:scale-110 slow-scale' 
          />
        </div>
      </div>
    </section>
  );
}

export default NewProduct;