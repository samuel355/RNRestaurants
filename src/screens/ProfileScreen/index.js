import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './styles'
import { Auth } from "aws-amplify";
import { useAuthContext } from "../../contexts/AuthContext";
import { DataStore } from "aws-amplify";
import { User } from "../../models";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

    const {dbUser} = useAuthContext();
    const {sub, setDbUser} = useAuthContext();

    const [name, setName] = useState(dbUser?.name || " ");
    const [address, setAddress] = useState(dbUser?.address || " ");
    const [lat, setLat] = useState(dbUser?.lat  || "0.00000");
    const [lng, setLng] = useState(dbUser?.lng  || "0.00000");
    const navigation = useNavigation();

    const createUser = async () => {
        try{
            const user = await DataStore.save(
                new User({
                    name, 
                    address, 
                    lat: parseFloat(lat), 
                    lng: parseFloat(lng), 
                    sub
                }) 
            )
            setDbUser(user);
            

        }catch(e){
            Alert.alert("Error", e.message)
        }
    };

    const updateUser = async() => {
        const user = await DataStore.save(
            User.copyOf(dbUser, (updated) => {
                updated.name = name
                updated.address = address
                updated.lat = parseFloat(lat)
                updated.lng = parseFloat(lng)
            })
        );
        setDbUser(user);
    }

    const onSave = async () => {
        if(dbUser){
            await updateUser();
            Alert.alert("Updated Successfully");
            navigation.navigate('Restaurant');
        }else{
            await createUser();
            Alert.alert("User Details Saved Successfully");
            navigation.navigate('Restaurant');
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.title}>Profile </Text>
            <Text style={styles.text}>Full Name</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={styles.input}
            />
            <Text style={styles.text}>Address</Text>
            <TextInput
                value={address}
                onChangeText={setAddress}
                style={styles.input}
            />
            <Text style={styles.text}>Latitude</Text>
            <TextInput
                value={lat}
                onChangeText={setLat}
                style={styles.input}
                keyboardType="numeric"
            />
            <Text style={styles.text}>Longitude</Text>
            <TextInput
                value={lng}
                onChangeText={setLng}
                style={styles.input}
            />
            
            <Pressable onPress={onSave} style={styles.updateBtn}>
                <Text style={{fontWeight: '500', fontSize: 16}}> {`${dbUser ? 'Update' : 'Save'}`} </Text>
            </Pressable>

            {
                dbUser ? (
                    <Text onPress={()=>Auth.signOut()} style={styles.signOutButton}> Sign Out</Text>
                ): ('')
            }
            
        </SafeAreaView>
    );
};


export default Profile;
