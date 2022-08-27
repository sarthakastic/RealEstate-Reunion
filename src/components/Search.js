import React, { useContext } from 'react'
// import { search } from './helper/Context'

const Search = () => {


  // const [search,setSearch] = useContext(search)

  return (
    <div className='flex md:flex-row flex-col md:justify-between gap-4 justify-center items-center h-32'>
        <div><p className='font-bold md:text-[32px] text-[24px]'>Search Properties to Rent</p></div>
        <div><input className='border border-gray-400 p-2' type="text" placeholder='Search with SearchBar' /></div>
        
    </div>
  )
}

export default Search