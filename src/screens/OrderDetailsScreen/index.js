import { View, Text, StyleSheet, Image, FlatList} from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'

const orderDetail = orders[0]

const OrderDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: orderDetail.Restaurant.image}}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.header}>{orderDetail.User.name} - {orderDetail.User.address}</Text>
                <Text>New &#8226; date</Text>
                <Text style={styles.heading}>Your Order</Text>
            </View>
        
            <FlatList 
                data={restaurants[0].dishes}
                renderItem={({item}) => <OrderDetails ord={item} />}
            />
        </View>
    )
}

const OrderDetails = ({ord}) => {
    return (
        <View style={styles.orderContainer}>
            <Text style={styles.count}>1</Text>
            <Text style={styles.orderName}>{ord.name}</Text>
            <Text style={styles.orderPrice}>$ {ord.price}</Text>
        </View>
    )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    textContainer: {
        margin: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    orderContainer: {
        marginLeft: 40,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    count: {
        padding: 8,
        backgroundColor: '#eee'
    },
    orderName:{
        fontWeight: '300',
        fontSize: 16,
        flex: 1,
        marginLeft: 15,
    },
    orderPrice: {
        fontSize: 16,
        fontWeight: '400',
    },
    underl: {
        borderBottomWidth: 5,
    }
});