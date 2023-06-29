import {useGetTopchartsQuery} from '../redux/services/shazam_core'
import { Link } from 'react-router-dom'; 
import { Loader } from '../components';
const TopArtists = () =>{
    const {data,isFetching,error}=useGetTopchartsQuery();
    if(isFetching) return <Loader title="Loading Artists...."/>

    let artists_data=data?.tracks
    return(
        <div className='w-full h-full'>
            <div className='w-full max-h-full grid grid-cols-4 gap-x-8 gap-y-4 place-items-center p-3'>
            {
                artists_data?.map((data)=>( 
                    <Link className="w-24 h-24 md:w-48 md:h-auto   " to={`/artists/${data?.artists[0].adamid}`} >
                    <img className='className="w-24 h-24 rounded-full' src={data?.images.background} />
                    </Link> 
                
              ))
            }
            </div>
           
        </div>
    )
}

export default TopArtists;
