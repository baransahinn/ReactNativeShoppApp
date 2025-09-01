import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text,FlatList, ListRenderItem, ActivityIndicator} from 'react-native'
import Config  from 'react-native-config';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard/ProductsCard';

type ProductsList = {
    title:string,
    image:string,
    price:string
    id:number
}
function Products() {
const [data , setData]= useState<ProductsList[]>([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

 const fetchData = async ()=>{
    try {
    const {data:productData} = await axios.get<ProductsList[]>(Config.API_URL!)
    
    setData(productData)
    setLoading(false)
    }catch(err: any){
        setError(err.message)
        setLoading(false)
    }
}
  const renderProducts:ListRenderItem<ProductsList> = ({item})=>(<ProductsCard title={item.title} image={item.image} price={item.price} />)

    useEffect(()=>{
        fetchData()
    },[]);

  if(loading){
      return <ActivityIndicator size="large" />
  }
  if(error){
        return <SafeAreaView><Text>{error}</Text></SafeAreaView>
  }

  return (
    <SafeAreaView>
        <FlatList 
        keyExtractor={(item)=>item.id.toString()}
        data={data}
        renderItem={renderProducts}
        />
    </SafeAreaView>
  )
}

export default Products