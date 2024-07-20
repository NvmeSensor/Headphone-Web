import React from 'react'
import Hero from '../components/Home/Hero'
import NewProduct from '@/components/Home/NewProduct'
import Categories from '@/components/Home/Categories'

const Home = () => {
  return (
    <section>
      <Hero />
      <NewProduct />
      <Categories />
    </section>
  )
}

export default Home