import {useState} from 'react';
import { Searchbar,SongCard } from '../components';
import { useSelector } from 'react-redux';
import {useGetTopchartsQuery} from '../redux/services/shazam_core'
const Search = () => {
    const [searchValue,setSearchvalue]=useState('')
    const {activeSong,isPlaying}=useSelector((state)=>state.player);

    const {data,isFetching,error}=useGetTopchartsQuery();



  function searchValuehandler(value){
    setSearchvalue(value);
  }

  return (
    <div className="flex flex-col ">
    <div className="border-stone-50 mt-4 mb-10" style={{width:"90%"}}>
      <Searchbar setsearch={searchValuehandler} />
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {
        
        searchValue != "" && data?.tracks?.map((song,index)=>{
            if(song.title.trim().toLowerCase().includes(searchValue)){
              return (
                <SongCard 
                key={index} 
                song={song} 
                index={index} 
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data.tracks}
                />
                )
            }
          }     
        ) 
          
      }
    </div>
</div>
)};

export default Search;
