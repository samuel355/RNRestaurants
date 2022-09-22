import { useState, useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'
import {DataStore} from 'aws-amplify'
import {Order, Courier} from '../../models'
import {FontAwesome5} from '@expo/vector-icons'

const OrderLiveUpdates = ({id}) => {

    const [order, setOrder] = useState(null);
    const [courier , setCourier] = useState(null);

    const mapRef = useRef(null)

    useEffect(() => {
        DataStore.query(Order, id).then(setOrder)
    },[])

    useEffect(() => {
        if(!order){
            return;
        }
        const subscription = DataStore.observe(Order, order.id).subscribe(
            (msg)=>{
                if(msg.opType === 'UPDATE'){
                    setOrder(msg.element)
                }
            }
        )
        return () => subscription.unsubscribe();
    }, [order])

    useEffect(() =>{
        if(order?.orderCourierId){
            DataStore.query(Courier, order.orderCourierId).then(setCourier);
        }
    },[order?.orderCourierId]);

    useEffect( () => {
        if(courier?.lat && courier?.lng){
            mapRef.current.animateToRegion({
                latitude: courier?.lat,
                longitude: courier?.lng,
                latitudeDelta: 0.07,
                longitudeDelta: 0.07,
            })
        }
    }, [courier?.lat, courier?.lng]);

    useEffect(() => {
        if(!courier){
            return;
        }
        const subscription  = DataStore.observe(Courier, courier.id).subscribe(
            (msg) =>{
                if(msg.opType === 'UPDATE'){
                    setCourier(msg.element)
                }
            }
        )
        return () => subscription.unsubscribe();
    }, [courier]);

    return (
        <View>
            <Text> Status: {order?.status || 'loading'} </Text>
            <MapView style={styles.map} ref={mapRef} showsUserLocation>
                {
                    courier?.lat && (
                        <Marker 
                            coordinate={{
                                latitude: courier?.lat,
                                longitude: courier?.lng,
                            }}
                        >
                            <View style={styles.iconContainer}>
                                <FontAwesome5 name="motorcycle" size={24} color="white" style={styles.icon} />
                            </View>
                        </Marker>
                    )
                }
            </MapView>
        </View>
    )
}

export default OrderLiveUpdates;