import {HiSearch} from "react-icons/hi";

const Searchbar = ({setsearch}) => (

  <div className="w-full relative">
      <input className="w-full p-6 border-none outline-none bg-black bg-opacity-100 text-white rounded-md text-xl" type="text" placeholder="Search" onInput={(e)=>{setsearch(e.target.value.toLowerCase())}} />
      <HiSearch className="text-[50px] text-white absolute top-3 right-5 "/>
  </div>  

);

export default Searchbar;
