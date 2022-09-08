import { View, Text, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import {Ionicons} from '@expo/vector-icons'
import styles from './styles'
import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.qty}>1</Text>
            <Image source={{uri: basketDish.image}} style={{width: 30, height: 30, marginLeft: 10,}} />
            <View style={styles.dishName}>
                <Text style={styles.subTitle}>{basketDish.name}</Text>
            </View>
            <View style={styles.priceItem}>
                <Text style={styles.itemPrice}>${basketDish.price}</Text>
            </View>
            
            <Ionicons name='close' size={20} color='#c40e23'  />
        </View>
    );
};

const BasketScreen = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.header}>Your Items</Text>

            <FlatList 
                data={restaurant.dishes}
                renderItem={({item}) => <BasketDishItem basketDish={item} />}
            />

            <View style={styles.divider} />
            <View style={styles.subTotalContainer}>
                <Text style={styles.subTotal}>Subtotal</Text>
                <Text style={styles.subPrice}>$18.99</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>$33.53</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>PAY  $ 74.77 </Text>
            </View>
        </View>
    )
}

export default BasketScreen