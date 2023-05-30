import {Error,Loader,SongCard} from '../components'
import {genres} from '../assets/constants'
import {useState} from 'react';

const Discover = () => {

    const [songType,setSongtype]=useState('pop');
    

    return(
        <div className="flex flex-col ">
            <div className="border-stone-50 w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {songType}</h2>
                <select onChange={(e)=>{ setSongtype(e.target.value)}} value='' className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    {
                        genres.map((ele)=>(
                            <option key={ele.value} value={ele.value}>{ele.title}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Discover;
