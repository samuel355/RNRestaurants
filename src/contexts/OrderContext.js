import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import{Order, OrderDish, Basket} from '../models'
import { useAuthContext } from "./AuthContext";
import {useBasketContext} from './BasketContext'
import { useNavigation } from "@react-navigation/native";

const OrderContext = createContext({});

const OrderContextProvider = ({children}) => {

    const {dbUser} = useAuthContext();
    const {restaurant, totalPrice, basketDishes, basket} = useBasketContext();
    const navigation = useNavigation();

    const createOrder = async () => {
        //Create the Order
        const newOrder = await DataStore.save(
            new Order({
                userID: dbUser.id,
                Restaurant: restaurant,
                status: 'NEW',
                total: totalPrice,
            })
        )

        //Add all dishes to the Order
        await Promise.all(
            basketDishes.map(
                (basketDish) => DataStore.save(
                    new OrderDish({
                        quantity: basketDish.quantity,
                        orderID: newOrder.id,
                        Dish: basketDish.Dish,
                    })
                )
            )
        ) 
        //Clear the basket after the order has been processed
        await DataStore.delete(basket)
        navigation.navigate('Success Order')
        
    }
    
    return (
        <OrderContext.Provider value={{createOrder}}>
            {children}
        </OrderContext.Provider>
    )
};

export default OrderContextProvider;
export const useOrderContext = () => useContext(OrderContext);