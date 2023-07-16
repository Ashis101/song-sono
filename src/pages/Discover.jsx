import {Error,Loader,SongCard} from '../components'
import {genres} from '../assets/constants'
import {useState} from 'react';
import {useGetTopchartsQuery} from '../redux/services/shazam_core'

import {useSelector,useDispatch} from 'react-redux';

const Discover = () => {
    const [songType,setSongtype]=useState('');
    const dispatch=useDispatch();
    const {activeSong,isPlaying}=useSelector((state)=>state.player);
    const {data,isFetching,error}=useGetTopchartsQuery();
    if(isFetching) return <Loader title="Loading Songs...."/>
    let tracks=data.tracks;

    // switch case use for sorting songs according to selected preference
    switch (songType) {
        case "POP":
            tracks=tracks.slice(0,4).map(song=>song);
            break;
        case "HIP_HOP_RAP":
            tracks=tracks.slice(4,8).map(song=>song);
            break;
        case "DANCE":
            tracks=tracks.slice(8,12).map(song=>song);
            break;            
        case "ELECTRONIC":
            tracks=tracks.slice(12,16).map(song=>song);
            break;
        case "SOUL_RNB":
            tracks=tracks.slice(16,20).map(song=>song);
            break;
        default:
            break;
    }


    return(
        <div className="flex flex-col ">
            <div className="border-stone-50 w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {songType}</h2>
                <div className='hidden lg:flex flex-row w-41'>
                    {
                        genres.slice(0,5).map((ele)=>(
                            <div  onClick={(e)=>setSongtype(e.target.getAttribute('value'))}  className={`hover:cursor-pointer mr-3 w-100 min-w-10  bg-black bg-opacity-50 text-gray-300 p-3 text-sm rounded-lg ${ ele.value == songType ? 'link-active':'' }`}  key={ele.value} value={ele.value}>{ele.title}</div>
                        ))
                    }  
                </div>

                <select onChange={(e)=>{ setSongtype(e.target.value)}} value='' className='md:hidden bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    {
                        genres.map((ele)=>(
                            <option key={ele.value} value={ele.value}>{ele.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
               {
                tracks?.map((song,index)=>(
                    <SongCard 
                    key={index} 
                    song={song} 
                    index={index} 
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={tracks}
                    />
                ))
                
               }
            
            </div>
        </div>
    )
}

export default Discover;
