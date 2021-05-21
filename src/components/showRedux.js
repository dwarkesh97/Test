import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList ,ActivityIndicator} from 'react-native'
import { connect } from 'react-redux';
import { userdata } from '../redux/Action'
import Profile from './Profile'


const User = (props) => {

    const [state, setState] = useState([])
    const [loding, setLoding] = useState(false)
    const [page, setPage] = useState(1)
    const [refreshing, setRefreshing] = useState(false)


    useEffect(() => {
        userList();
    }, [])
    const userList = () => {
        fetch('https://reqres.in/api/users', {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                var array = data.data
                var deleted = delete array[5];
                props.storedata(data.data)
                setState(props.uList)
                console.log('Success:', data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const lodeData = () =>{
        setPage({page:+1},()=>{
            userList();
        })
    }

    const lodingIndicator = () => {
        if (loding) {
            return null;
        }else{
            <View style={{
                paddingVertical:20,
                borderTopWidth:1,
                borderColor:'#CCC'
            }}>
                <ActivityIndicator size="large" />
            </View>
        }
    }

    return (
        <View style={{ flex: 1 }}>
            
            <FlatList
                data={data} keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Profile
                        imageUri={item.avatar}
                        first_name={item.first_name}
                        last_name={item.last_name}
                        email={item.email}
                    />
                }
                onEndReached={userList}
                onEndThreshold={0}
            >
            </FlatList>
        </View>
    )
}


const mapStateToProps = (state) => {

    return {
        uList: state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        storedata: (data) => { dispatch(userdata({ data })) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

