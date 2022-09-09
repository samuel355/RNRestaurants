import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    page: {
        flex: 1,
        backgroundColor: "#dbdbdb"
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    subTitle: {
        color: "grey",
        fontSize: 18,
    },
    textContainer: { 
        marginLeft: 10,
        marginRight: 10,
    },
    rating:{
        color: "#fc7703",
        fontWeight: "500",
        fontSize: 16,
        marginTop: 10,
    },
    menu:{
        marginLeft: 10,
        fontSize: 24,
        fontWeight: '600',
        marginTop: 15,   
    },
    iconContainer:{
        position: "absolute",
        top: 40,
        left: 10,
    },
    buttonContainer:{
        backgroundColor: 'black',
        marginTop: "auto",
        padding: 20,
        alignItems: 'center',
        margin: 40,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
    },
});