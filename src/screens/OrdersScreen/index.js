import { View, Text, FlatList } from 'react-native'
import OrderListItem from '../../components/OrderListItem/'
import styles from './styles'
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={({item}) => <OrderListItem order={item} />}
            />
        </View>
    )
}

export default OrderScreen