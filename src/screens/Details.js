import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import ProfilePichar from '../components/ProfilePichar'


const Details = () => {

    const route = useRoute();

    return (
        <View style={styles.container}>
            <ProfilePichar uri={route.params.avatar} />
            <Text style={styles.name}>{route.params.firstname} {route.params.lastname}</Text>
            <Text style={styles.email}>{route.params.email}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingTop:10,
       
    },
    name: {
        fontSize: 16,
        color: '#20232a',
        fontWeight: 'bold'
    },
    email: {
        fontSize: 16,
        color: '#20232a',
    },
})
