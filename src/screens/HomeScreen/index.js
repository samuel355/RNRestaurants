import RestaurantItem from '../../components/RestaurantItem'
import { StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import {Restaurant} from '../../models'

export default function HomeScreen() {
    const [restaurants, setRestaurants] = useState([]);

    {
        /* UseEffect Method 1
        const fetchRestaurants = async () =>{
            const results = await DataStore.query(Restaurant);
            setRestaurants(results);
        }

        useEffect(() =>{
            fetchRestaurants();
        }, []) */
    }

    //UseEffect Method 2: 
    useEffect(() => {
        DataStore.query(Restaurant).then(setRestaurants);
    }, []) 

    return (
        <FlatList 
            style={styles.container}
            data={restaurants} 
            renderItem={({item}) =>  <RestaurantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
        />
  );
}

const styles = StyleSheet.create({
    container: {padding: 15},
});
