import { View, Text, FlatList } from 'react-native'
import OrderListItem from '../../components/OrderListItem/'
import styles from './styles'
import { useOrderContext } from '../../contexts/OrderContext'

const OrderScreen = () => {
    const {orders} = useOrderContext();
    //console.log(orders)
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 20, marginTop: 30, alignItems: 'center', marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>Orders</Text>
            </View>
            {/* {
                orders.map((order)=>(
                    <Text key={order.orderID}>{order.status}</Text>
                ))
            } */}

            <FlatList 
                data={orders}
                renderItem={({item}) => <OrderListItem order={item} />}
            />
        </View>
    )
}

export default OrderScreen