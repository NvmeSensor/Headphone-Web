import React from 'react';

const NewsLetter = () => {

  return (
    <section className='flex justify-center items-center w-full py-16'>
      <div className='flex flex-col items-center justify-center gap-5 w-[90vw] lg:w-[75vw]'>
        <div className='flex justify-center items-center'>
          <h1 className='text-4xl font-semibold text-center'>
            Headphones with Good Quality <br/> and Affordable Prices
          </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
          <form className='flex flex-wrap justify-center items-center w-full gap-3'>
            <input type="text " placeholder="Enter your preferred headphone" className="px-6 py-3 font-semibold text-xl rounded-lg outline-none input"/>
            <button className="px-6 py-3 font-semibold text-xl rounded-lg border-0 self-start transition-transform transform hover:scale-110 btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;