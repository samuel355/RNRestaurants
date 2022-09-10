import { View, Text, FlatList } from 'react-native'
import OrderListItem from '../../components/OrderListItem/'
import styles from './styles'
import { useOrderContext } from '../../contexts/OrderContext'

const OrderScreen = () => {
    const {orders} = useOrderContext();
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