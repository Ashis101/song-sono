import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const shazamCoreapi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://shazam.p.rapidapi.com",
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','8e8161a71amsh3cc7715f8849b63p19f2f1jsn1cfef62a3678');
            return headers
        }
    }),
    endpoints:(builders)=>({
        getTopcharts:builders.query({
            query:()=> '/charts/track'
        })
    })
})


export const {useGetTopchartsQuery}=shazamCoreapi; 
export default shazamCoreapi;



