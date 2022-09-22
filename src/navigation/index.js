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
import { useAuthContext } from "../contexts/AuthContext";
import SuccessOrderScreen from "../screens/SuccessOrderScreen";
import OrderDetailsNavigator from "./OrderDetailsNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const {dbUser} = useAuthContext();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {
                dbUser ? (
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                ): (
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
                )
            }
            
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
            <HomeStack.Screen name="Restaurants" component={HomeScreen} options={{headerShown: false}} />
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{headerShown: false}}  />
            <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
            <HomeStack.Screen name="Basket" component={BasketScreen} />
            <HomeStack.Screen name="Success Order" component={SuccessOrderScreen} options={{headerShown: false}}  />
        </HomeStack.Navigator>

    )
};

const OrdersStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Order" component={OrderScreen} options={{headerShown: false}}/>
            <OrdersStack.Screen name="Order Details" component={OrderDetailsNavigator} />
        </OrdersStack.Navigator>

    )
};


export default RootNavigator;