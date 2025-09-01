import React from 'react'
import { View ,Text,Image} from 'react-native'
import styles from './ProductsCard.style'
 type Product = {
   title: string;
   image: string;
   price: string;
 }

function ProductsCard(product: Product) {
  return (
    <View style={styles.container}>
        <Image style={styles.image}  source={{ uri: product.image }}/>
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
        </View>
    </View>
  )
}

export default ProductsCard