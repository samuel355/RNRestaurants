import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './styles'
import { Auth } from "aws-amplify";

const Profile = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState("0.000000");
    const [lng, setLng] = useState("0.000000");

    const onSave = () => {};

    return (
        <SafeAreaView>
            <Text style={styles.title}>Profile</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={styles.input}
            />
            <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
                style={styles.input}
            />
            <TextInput
                value={lat}
                onChangeText={setLat}
                placeholder="Latitude"
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                value={lng}
                onChangeText={setLng}
                placeholder="Longitude"
                style={styles.input}
            />
            <Button onPress={onSave} title="Save" />
            <Text onPress={()=>Auth.signOut()} style={styles.signOutButton}> Sign Out</Text>
        </SafeAreaView>
    );
};


export default Profile;
