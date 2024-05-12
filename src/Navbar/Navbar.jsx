import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo.png'

const Navbar = () => {
  return (
  <div className='flex items-center justify-center gap-5 '>
      <div className='flex items-center justify-center space-x-2 text-white'>
         <img className='w-24 ' src={logo} />
          <div className='flex list-none space-x-5'>  
           <form class="max-w-md mx-auto ">   
               <div class="relative gap-0">
                    <div class="absolute inset-y-0 flex items-center ps-3 ">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                       </svg>
                   </div>
                   <div>
                       <input type="search" id="default-search" class="  p-3 px-5 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search Destination here"
                    /></div>
               </div>
           </form>
         </div>
    </div>
    <div className='flex items-center text-lime-400 list-none gap-4'>
            <li><NavLink to="/">News</NavLink> </li>
            <li><NavLink to="/Destination">Destination</NavLink> </li>
            <li><NavLink to="/Destination">Block</NavLink> </li>
            <li><NavLink to="/Contact">Contact</NavLink> </li> 
            <li><NavLink to="/Login"><button className='bg-[#F9A51A] p-2 px-7 text-black rounded-lg'>LogIn</button></NavLink></li>
    </div>
  </div>
  )
}

export default Navbar;
