import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text,FlatList, ListRenderItem} from 'react-native'
import Config  from 'react-native-config';
import axios from 'axios';
import ProductsCard from '../components/ProductsCard';

type ProductsList = {
    title:string,
    image:string,
    price:string
    id:number
}
function Products() {
const [data , setData]= useState<ProductsList[]>([])

 const fetchData = async ()=>{
    try {
    const {data:productData} = await axios.get<ProductsList[]>(Config.API_URL!)
    setData(productData)
    }catch(error){
        console.log(error)
    }
}
  const renderProducts:ListRenderItem<ProductsList> = ({item})=>(<ProductsCard title={item.title} image={item.image} price={item.price} />)

    useEffect(()=>{
        fetchData()
    },[]);
 
  
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