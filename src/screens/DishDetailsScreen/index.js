import { useState, useEffect } from 'react'
import { View, Text, Pressable, ActivityIndicator, Image } from 'react-native'
import styles from './styles'
import {AntDesign} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Dish } from '../../models'
 
const DishDetailsScreen = () => {

    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();

    const [dish, setDish] = useState(null);

    const route = useRoute();
    const id = route.params?.id;

    useEffect(() => {
        if(id){
            DataStore.query(Dish, id).then(setDish);
        }
    }, [id]);

    const onMinus = () => { 
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }else{
            alert('Minimum quantity must be one');
        }
    }
    const onPlus = () => { 
        setQuantity(quantity + 1);
    }

    const getTotal = () =>{
        return (dish.price * quantity).toFixed(2);
    }

    if(!dish){
        return <ActivityIndicator style={{margin: "auto", paddingTop: 50, flex: 1}} size={30} color="#e36600" />
    }

    return (
        <View style={styles.page}>
            {
                dish.image ? (
                    <Image 
                        style={{width: '100%', aspectRatio: 5/3}}
                        source={{uri: dish.image}}
                    />
                ):
                (
                    <Text style={{fontSize:26, fontWeight: 'bold', textAlign: 'center', color: "#e36600"}}> No Food image </Text>
                )
                
            }
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} /> 

            <View style={styles.iconsContainer}>
                <AntDesign onPress={onMinus} name='minuscircle' size={60} color='black' />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign onPress={onPlus} name='pluscircle' size={60} color='black' />
            </View>
  
            <Pressable onPress={() => navigation.navigate("Basket")} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Added  <Text style={styles.qty}>{quantity}</Text> item(s) to the Basket &#8226; <Text style={styles.price}>($ { getTotal() })</Text></Text>
            </Pressable>
        </View>
    )
}

export default DishDetailsScreen