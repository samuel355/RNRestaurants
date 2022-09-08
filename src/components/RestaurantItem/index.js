import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DEFAULT_IMAGE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'

const RestaurantItem = ({restaurant}) => {
    const onPress = () =>{
        navigation.navigate('Restaurant', {id: restaurant.id});
    }

    const navigation = useNavigation();
    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <View>
                <Image
                    source={{uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE}} 
                    style={styles.image} 
                />
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.title}>{restaurant.name}</Text>
                        <Text style={styles.subTitle}> Delivery {restaurant.minDeliveryTime.toFixed(0)} - {restaurant.maxDeliveryTime.toFixed(0)} minutes &#8226; [$ {restaurant.deliveryFee.toFixed(2)} ]</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
                    </View>
                </View>
            </View>
           
        </Pressable>
    )
    
}
export default RestaurantItem; 

const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        marginVertical: 10,
        marginBottom: 20,
    },
    detailsContainer: {
        marginBottom: 20,
    },
    detailsContainerAlt: {},
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 5,
    },
    subTitle: {
        color: "grey",
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rating:{
        color: "#fc7703",
        fontWeight: "500",
        fontSize: 12,
    },
    ratingContainer:{
        backgroundColor: "#dedddc",
        padding: 6,
        borderRadius: 20,
        height:30,
        width:30,
        alignItems: "center",
    }
});