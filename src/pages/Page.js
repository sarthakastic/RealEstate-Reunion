import React, { useState } from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import Screen from './Screen'
import {Menu } from "../components/helper/Context"


const Page = () => {

  const [mobileView,setMobileView]= useState(false)

  return (
    <>
    <Menu.Provider value={{mobileView, setMobileView}}>
    <Navbar />
    <MobileMenu />
    </Menu.Provider>
    <Screen/>
    </>
  )
}

export default Page