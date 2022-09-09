import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { useBasketContext } from '../../contexts/BasketContext'
import BasketDishItem from '../../components/BasketDishItem'
import {useOrderContext} from '../../contexts/OrderContext'

const BasketScreen = () => {
    const {restaurant, basketDishes, totalPrice} = useBasketContext();
    const {createOrder} = useOrderContext();

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
                <Text style={styles.subPrice}>{(totalPrice - restaurant.deliveryFee).toFixed(2)}</Text>
            </View>
            <View style={styles.subTotalContainer}>
                <Text style={styles.subTotal}>Delivery</Text>
                <Text style={styles.subPrice}>$ {restaurant.deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>$ {totalPrice.toFixed(2)}</Text>
            </View>

            <Pressable 
                onPress={createOrder}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>ORDER &#8226; $ {totalPrice.toFixed(2)} </Text>
            </Pressable>
        </View>
    )
}

export default BasketScreen