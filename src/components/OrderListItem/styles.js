import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 0.3,
        paddingBottom: 10,
        borderBottomColor: "grey"
    },
    image:{
        width: 100,
        height: 75,
        marginRight: 10,
        borderRadius: 10,
    },
    name:{
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
    },
    count: {
        marginVertical: 5,
        color: "grey",
        letterSpacing: 1,
    },
    days: {
        color: "grey",
        letterSpacing: 1,
    }
});