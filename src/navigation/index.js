import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import OrderScreen from "../screens/OrdersScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DishDetailsScreen from '../screens/DishDetailsScreen'
import BasketScreen from "../screens/BasketScreen";
import {Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{headerShown: false}}  />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#ebdbce', marginTop: 10}} activeColor="#e36600">
            <Tab.Screen 
                name="Home" 
                component={HomeStackNavigator } 
                options={{
                    tabBarIcon: ({color}) => <Foundation name="home" size={20} color={color} /> 
                }} 
            />
            <Tab.Screen 
                name="Orders" 
                component={OrderStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => <MaterialIcons name="list-alt" size={20} color={color} /> 
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={20} color={color} /> 
                }} 
            />
        </Tab.Navigator>
    )
};

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={HomeScreen}/>
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{headerShown: false}}  />
            <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
            <HomeStack.Screen name="Basket" component={BasketScreen} />
        </HomeStack.Navigator>

    )
};

const OrdersStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Order" component={OrderScreen} />
            <OrdersStack.Screen name="Order Details" component={OrderDetailsScreen} />
        </OrdersStack.Navigator>

    )
};


export default RootNavigator;