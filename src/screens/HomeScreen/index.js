import RestaurantItem from '../../components/RestaurantItem'
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import {Restaurant} from '../../models'

const Header = () => {
    return (
        <View style={{paddingTop: 50, marginTop: 0, paddingBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between', positions: 'fixed', backgroundColor: '#eee'}}>
            <Text style={{fontSize: 18, fontWeight: '800', color: '#e36600'}}> RESTAURANTS</Text>
            <Text style={{color: 'darkblue', fontWeight: '800', fontSize: 18}}>LoGo</Text>
        </View>
    )
}

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
            ListHeaderComponent={ () => <Header /> }
            stickyHeaderIndices={[0]}
            style={styles.container}
            data={restaurants} 
            renderItem={({item}) =>  <RestaurantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
        />
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 15,
    },
});
