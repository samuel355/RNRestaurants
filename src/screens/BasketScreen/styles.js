import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({ 
    container: {
        flex: 1,
        width: '100%',
        marginTop: 100,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginHorizontal: 10,
        alignItems: 'left',

    },
    header: {
        marginVertical: 20,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '500',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    qty: {
        backgroundColor: '#edeef0',
        padding: 8,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '500',
    },
    subTotal: {
        fontSize: 16,
        fontWeight: '500',
    },
    subPrice: {
        fontSize: 16,
        fontWeight: '500',
    },
    total: {
        fontSize: 20,
        fontWeight: '600',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: '600',
    },
    divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 8,
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 15,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 15,
    },
    buttonContainer: {
        marginTop: "auto",
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }, 
    dishName: {
        flex: 1,
        marginLeft: 20,
    },
    priceItem:{
        marginLeft: 35,
        flex: 1,
    }
});