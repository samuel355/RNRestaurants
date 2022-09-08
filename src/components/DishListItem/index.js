import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({dish}) => {
    const navigation = useNavigation();
    return (
        <Pressable 
            onPress={
                ()  => navigation.navigate("Dish", {id: dish.id})
            } 
            
            style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.name}>{dish.name} </Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>Price ${dish.price.toFixed(2)}</Text>
            </View>

            {
                dish.image &&(
                    <Image 
                        source={{uri: dish.image}}
                        style={styles.image}
                    />
                )
            }
        </Pressable>
    )
}

export default DishListItem;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',   
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.7,
    },
    description:{
        color: 'grey',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
    detail:{
        flex: 1,
    },
    image:{
        height: 50,
        width: 50,
        aspectRatio: 1,
        borderRadius: 15,
    }
})