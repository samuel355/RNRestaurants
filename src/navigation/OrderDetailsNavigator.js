import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import OrderDetails from '../screens/OrderDetailsScreen'
import OrderLiveUpdates from '../screens/OrdersLiveUpdates';


const Tab = createMaterialTopTabNavigator();

const OrderDetailsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Details" component={OrderDetails} />
            <Tab.Screen name="Updates" component={OrderLiveUpdates} />
        </Tab.Navigator>
    )
};

export default OrderDetailsNavigator;