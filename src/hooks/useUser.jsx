//  import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
// import React from 'react'
 
//  const useUser = () => {


//     const { data ,refetch  } =  useQuery({
//         queryKey:['userData'],
//         queryFn: async ()=>{
//          const res = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')

//          return res.data
//         }
//     })

//     if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
//     if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)

//     return [ data ,refetch]

// }
 
 
//  export default useUser