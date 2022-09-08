import { View, Text, Image} from 'react-native'
import styles from './styles'

const DEFAULT_IMAGE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'

const Header = ({restaurant}) => {

    return (
        <View style={styles.page}>
            <Image 
                source={{uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE}} 
                style={styles.image} 
            />

            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subTitle}>Delivery {restaurant.minDeliveryTime.toFixed(0)} - {restaurant.maxDeliveryTime.toFixed(0)} minutes &#8226; [$ {restaurant.deliveryFee.toFixed(2)} ]</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{restaurant.rating.toFixed(1)} ratings </Text>
                </View> 
            </View>
            <Text style={styles.menu}>Menu</Text>
            
        </View>
    )
}

export default Header;
