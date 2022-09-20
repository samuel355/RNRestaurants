import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({order}) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Order Details", 
        {
            screen: "Details",
            params: {id: order.id}
        })
    }
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image 
                source={{uri: order.Restaurant.image}}
                style={styles.image}

            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{order.Restaurant.name}</Text>
                <Text style={styles.count}>{order.quantity} items &#8226; $ {order.total.toFixed(2)}</Text>
                <Text style={styles.days}>2 days ago &#8226; {order.status}</Text>
            </View>
        </Pressable>
    )
} 

export default OrderListItem