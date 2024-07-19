import React from 'react'
import Hero from '../components/Hero'
import NewProduct from '@/components/NewProduct'
import Categories from '@/components/Categories'
import NewsLetter from '@/components/Newsletter'

const Home = () => {
  return (
    <section>
      <Hero />
      <NewProduct />
      <Categories />
      {/* <NewsLetter /> */}
    </section>
  )
}

export default Home