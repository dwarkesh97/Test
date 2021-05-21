import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native'
import ProfilePichar from './ProfilePichar'

const Profile = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <ProfilePichar uri={props.imageUri} />
            <View style={styles.innercon}>
                <Text style={styles.name}>{props.first_name} {props.last_name}</Text>
                <Text style={styles.email}>{props.email}</Text>
            </View>
        </SafeAreaView>
    )
}
export default Profile

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingTop:10,
        flexDirection:'row',
        flex: 1,
        alignItems:'center'
    },
    innercon:{
        paddingHorizontal:10
    },
    name: {
        fontSize: 16,
        color: '#20232a',
        fontWeight:'bold'
    },
    email: {
        fontSize: 16,
        color: '#20232a',
    },
})
