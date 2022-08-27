import React, { useContext } from 'react'
import cross from "../images/cross.png"
import { Menu } from "../components/helper/Context"

const MobileMenu = () => {

    const {mobileView,setMobileView}= useContext(Menu)

  return (
    <div className={`w-full h-[100vh] ${mobileView?"flex":"hidden"} flex-col justify-between bg-gray-200`}>
        <div className='w-full h-10 pr-2 flex items-center justify-end border  border-b-slate-400'>
            <button onClick={()=>{setMobileView(false)}}>
            <img className='  h-6 w-6 border border-slate-400' src={cross} alt="" />

            </button>

            
        </div>
        <div className='flex flex-col justify-center items-center gap-8 text-slate-600 font-bold '>
            <div>Rent</div>
            <div>Sell</div>
            <div>Buy</div>
            <div>Manage Property</div>
            <div>Resources</div>
        </div>
        <div className='flex flex-col justify-center items-center pb-16 gap-8 text-slate-600 font-semibold'>
        <div className="p-2 border-2  border-[#7165E5] rounded-md">
            <button >Log in</button>
          </div>
            <div className="p-2  bg-[#7165E5] border-2 rounded-md text-white">
            <button>Sign Up</button> 
          </div>
        </div>

    </div>
  )
}

export default MobileMenu