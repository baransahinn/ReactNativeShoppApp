import useFetch from '../../Hooks/useFetch/useFetch';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text,FlatList, ListRenderItem, ActivityIndicator} from 'react-native'
import Config  from 'react-native-config';
import ProductsCard from '../components/ProductsCard/ProductsCard';

type ProductsList = {
    title:string,
    image:string,
    price:string
    id:number
}
function Products() {

  const {data, loading, error} = useFetch(Config.API_URL!)

  const renderProducts:ListRenderItem<ProductsList> = ({item})=>(<ProductsCard title={item.title} image={item.image} price={item.price} />)

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



