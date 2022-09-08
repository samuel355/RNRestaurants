import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({order}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Order Details", {id: order.id})} style={styles.container}>
            <Image 
                source={{uri: order.Restaurant.image}}
                style={styles.image}

            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{order.Restaurant.name}</Text>
                <Text style={styles.count}>3 items &#8226; $38.56 </Text>
                <Text style={styles.days}>2 days ago &#8226; {order.status}</Text>
            </View>
        </Pressable>
    )
} 

export default OrderListItem