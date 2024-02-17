import React from 'react'
import Header from './Layouts/header'
import Footer from './Layouts/footer'
import {BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/indexHome'
import Contact from '../pages/contactUs/indexContactus'


function Router() {
    const Layout = () => {
        return (
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<Home title='Home'/>}/>
                        <Route path='/contact-us' element={<Contact title='Contact us'/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            </>
        )
    }

  return (
    <BrowserRoutes/>
  )
}

export default Router