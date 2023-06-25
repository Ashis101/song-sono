import { links } from "../assets/constants";
import {NavLink} from 'react-router-dom';

const NavLinks=({handleclick})=>(

    <div className="mt-10">
        {
            links.map(ele=>(
                <NavLink 
                key={ele.name}
                to={ele.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-green-400"
                onClick={()=>{handleclick && handleclick()}}
                >
                <ele.icon className="w-6 h-6 mr-2" />
                {ele.name}
                </NavLink>
            ))
        }
    </div>
)

export default NavLinks