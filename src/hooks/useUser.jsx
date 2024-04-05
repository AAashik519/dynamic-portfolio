 import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
 
 const useUser = () => {


    const { isPending, error, data:fetchdata=[]   } =  useQuery({
        queryKey:['userData'],
        queryFn: async ()=>{
         const res = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')

         return res.data
        }
    })
 
    return [ fetchdata ,isPending ,error]

}
 
 
 export default useUser