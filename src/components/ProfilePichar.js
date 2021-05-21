import React from 'react'
import {Image,View,StyleSheet} from 'react-native';

const ProfilePichar = ({ uri }) => {
	return (
		<View>
			<Image source={{uri}} style={styles.imagesize}/>
		</View>
	)
}

export default ProfilePichar;

const styles = StyleSheet.create({
    imagesize:{
        width:100,
        height:100,
		borderRadius:100,
		marginBottom:10
    }
})
