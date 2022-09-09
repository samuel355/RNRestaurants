import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import {Ionicons} from '@expo/vector-icons'

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.qty}>{basketDish.quantity}</Text>

            <View style={styles.dishName}>
                <Text style={styles.subTitle}>{basketDish.Dish.name}</Text>
            </View>
            <View style={styles.priceItem}>
                <Text style={styles.itemPrice}>${basketDish.Dish.price}</Text>
            </View>
            
            <Ionicons name='close' size={20} color='#c40e23'  />
        </View>
    )
}

export default BasketDishItem