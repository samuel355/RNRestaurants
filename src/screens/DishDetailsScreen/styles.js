import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({ 
    page:{
        flex: 1,
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 15,
    },
    description: {
        color: "#696969",
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 15,
    },
    iconsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    quantity: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    buttonContainer:{
        backgroundColor: 'black',
        marginTop: "auto",
        padding: 20,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
    },
    qty: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTop: {
        textAlign: 'center',
        marginTop: 15,
    },
});