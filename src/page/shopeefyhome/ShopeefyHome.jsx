import React from 'react'
import BannerHome from '../../components/bannerhome/BannerHome'
import ListCategory from '../category/ListCategory'
import ProductHome from '../../components/product/ProductHome'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/bannerhome/Banner'

const ShopeefyHome = () => {
  const images = [
    '/src/assets/slider1.jpg',
    '/src/assets/slider2.jpg',
    '/src/assets/slider3.jpg',
    '/src/assets/slider4.jpg'
  ]
  return (
    <>
      <div className='p-8 container mx-auto'>
        <Banner />
        <h2 className='text-center uppercase font-mono font-bold text-4xl p-5'>
          Category
        </h2>
        <ListCategory />
        {/* <div className='max-w-[1200px] mx-auto font-sans shadow-lg rounded-lg p-4 overflow-x-auto text-center uppercase font-bold text-4xl'>
          
        </div> */}
        <h1 className='text-center uppercase font-mono font-bold text-4xl'>
          Treding Products
        </h1>
        <ProductHome />
        <BannerHome images={images} />
        <Footer />
      </div>
    </>
  )
}

export default ShopeefyHome
