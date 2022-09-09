import { View, Text } from 'react-native'
import styles from './styles'

const SuccessOrderScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Order Created Successfully</Text>
            <Text style={styles.sub}>You can view your orders now</Text>
        </View>
    )
}

export default SuccessOrderScreen