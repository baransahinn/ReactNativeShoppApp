import axios from "axios";
import { useEffect, useState } from "react";

type ProductsList = {
    title:string,
    image:string,
    price:string
    id:number
}
function useFetch(url:string) {
    const [data , setData]= useState<ProductsList[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async ()=>{
    try {
    const {data:responseData} = await axios.get<ProductsList[]>(url)

    setData(responseData)
    setLoading(false)
    }catch(err: any){
        setError(err.message)
        setLoading(false)
    }
}
useEffect(()=>{
    fetchData();
},[])
return {data, loading, error}
}
export default useFetch;
