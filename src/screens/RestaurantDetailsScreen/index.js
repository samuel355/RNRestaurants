import { useState, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { View, FlatList, ActivityIndicator, Pressable, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './styles'
import { DataStore } from 'aws-amplify'
import { Restaurant, Dish } from '../../models'
import { useBasketContext } from '../../contexts/BasketContext'


const RestaurantDetailsScreen = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDishes] = useState([]);

    const route = useRoute();
    const id = route.params?.id;

    const {setRestaurant: setBasketRestaurant} = useBasketContext();

    useEffect(()=> {
        if(!id){
            return;
        }
        setBasketRestaurant(null);

        DataStore.query(Restaurant, id).then(setRestaurant);

        //Fetch all dishes with corresponding restaurant id.
        DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes);
    }, [id]);

    useEffect(() => {
        setBasketRestaurant(restaurant)
    }, [restaurant]);

    const navigation = useNavigation();
    const backP = () => {
        navigation.goBack();
    };

    if(!restaurant){
        return <ActivityIndicator style={{margin: "auto", paddingTop: 50, flex: 1}} size={30} color="#e36600" />
    }

    return (
        <View style={styles.page}>

            <FlatList 
                ListHeaderComponent={ () => <Header restaurant={restaurant} /> }
                data={dishes}
                renderItem={({item}) => <DishListItem dish={item} />}
                keyExtractor={(item) =>item.name}
            />

            <Ionicons
                onPress={backP}
                name="arrow-back-circle"
                size={40}
                color="white"
                style={styles.iconContainer}
            />

            <Pressable 
                //onPress={onAddToBasket}
                //onPress={() => navigation.navigate("Basket")} 
                style={styles.buttonContainer}>

                <Text style={styles.buttonText}> Add To Basket</Text>
            </Pressable>
        </View>
    )
}

export default RestaurantDetailsScreen;

