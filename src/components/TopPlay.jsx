import {useEffect,useState,useRef} from 'react' 
import {Link} from 'react-router-dom'
import { useSelector,useDispatch  } from 'react-redux';
import {Swiper,SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause'
import {playPause,setActiveSong} from '../redux/features/playerSlice';
import {useGetTopchartsQuery} from '../redux/services/shazam_core'
import Topchartcard from './Topchartcard';

import 'swiper/css';
import 'swiper/css/free-mode';
const TopPlay = () => {
  const {activeSong,isPlaying}=useSelector((state)=>state.player);
  const {data,isFetching,error}=useGetTopchartsQuery();
  
  const divRef=useRef(null);
  const dispatch=useDispatch();

  // taking 5 song for top play
  const topPlays=data?.tracks.slice(0,5);

  const handlePaueClick=()=>{
    dispatch(playPause(false));
  }

  const handlePlayClick=()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }

  return (

    <div className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col'>
      <div className='w-full flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
              <h2 className='text-white font-bold text-2xl'>Top Charts</h2>
              <Link to='/top-charts'><p>See more</p></Link>

          </div>
          <div className='mt-4 flex flex-col gap-1' >
            {
              topPlays?.map((data,i)=>(
                <Topchartcard 
                key={data.key} song={data} 
                index={i} isplaying={isPlaying}
                activesong={activeSong} handlepaueclick={handlePaueClick}
                handleplayclick={handlePlayClick}
                />  
              ))
            }
          </div>
          <div className='w-full flex flex-col mt-8'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-white font-bold text-2xl'>Top Artist</h2>
                <Link to='/top-artists '><p>See more</p></Link>
                
            </div>
            <Swiper slidesPerView="auto" spaceBetween="15" freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className='mt-4'  >
              {
                topPlays?.map((data,i)=>( 
                <SwiperSlide key={data?.key} 
                  style={{width:'25%',height:'auto' }}
                  className='shadow-lg rounded-full animate-sliderright'
                >
                  <Link to={`/artists/${data?.artists[0].adamid}`} >
                    <img src={data?.images.background} />
                  </Link> 
                </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          
      </div>

    </div>

  )

}

export default TopPlay;
