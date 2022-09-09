import { View, Text, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { useBasketContext } from '../../contexts/BasketContext'
import BasketDishItem from '../../components/BasketDishItem'

const BasketScreen = () => {
    const {restaurant, basketDishes, totalPrice} = useBasketContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{restaurant?.name}</Text>
            <Text style={styles.header}>Your Items</Text>

            <FlatList 
                data={basketDishes}
                renderItem={({item}) => <BasketDishItem basketDish={item} />}
            />

            <View style={styles.divider} />
            <View style={styles.subTotalContainer}>
                <Text style={styles.subTotal}>SubTotal</Text>
                <Text style={styles.subPrice}>{(totalPrice.toFixed(2) - restaurant.deliveryFee.toFixed(2))}</Text>
            </View>
            <View style={styles.subTotalContainer}>
                <Text style={styles.subTotal}>Delivery</Text>
                <Text style={styles.subPrice}>$ {restaurant.deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>$ {totalPrice.toFixed(2)}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>PAY &#8226; $ {totalPrice.toFixed(2)} </Text>
            </View>
        </View>
    )
}

export default BasketScreen