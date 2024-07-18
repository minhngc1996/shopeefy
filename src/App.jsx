import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ShopeefyHome from './page/shopeefyhome/ShopeefyHome'
import ListProduct from './components/product/ListProduct'
import DetailProduct from './components/product/DetailProduct'

import Support from './page/support/Support'

import toast, { Toaster } from 'react-hot-toast'
import ConfirmPayment from './components/confirm-payment/ConfirmPayment'
import OrderTracking from './components/order-tracking/OrderTracking'
import Footer from './components/footer/Footer'
import ProductByCategory from './components/boxproduct/ProductByCategory'
import Career from './page/career/Career'

function App () {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='' element={<Navbar />}>
          <Route path='/' element={<ShopeefyHome />}></Route>
          <Route path='product' element={<ListProduct />}></Route>
          <Route
            path='product/detail-product'
            element={<DetailProduct />}
          ></Route>{' '}
          <Route path='career' element={<Career />}></Route>
          <Route path='support' element={<Support />} />
          <Route path='/confirm-payment' element={<ConfirmPayment />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
          <Route
            path='category/:categoryUrl/*'
            element={<ProductByCategory />}
          />
          <Route path='/' element={<Footer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
