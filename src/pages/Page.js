import React, { useState } from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import Screen from './Screen'
import {Menu, Type } from "../components/helper/Context"


const Page = () => {

  const [mobileView,setMobileView]= useState(false)
  const [type, setType] = useState("")

  return (
    <>
    <Type.Provider value={{type,setType}} >
    <Menu.Provider value={{mobileView, setMobileView}}>
    <Navbar />
    <MobileMenu />
    <Screen/>
    </Menu.Provider>
    </Type.Provider>
    
    </>
  )
}

export default Page