import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import Profile from '../components/Profile'
var Dataarray = []
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            list: 1,
            error: null,
            fullData: '',
            text: ''
        };
    }

    componentDidMount() {
        this.getData()
        this.loddata()
    }

    getData = () => {

        if (this.state.text == '' || this.state.text == null) {
            const { page, list } = this.state
            const url = `https://reqres.in/api/users?page=${list}`
            this.setState({ loading: true })
            setTimeout(() => {
                fetch(url)
                    .then(res => res.json())
                    .then(res => {
                        console.log("res.data", this.state.data);
                        console.log("res.data2", res.data);

                        this.setState({
                            data: page === 1 ? res.data : [...this.state.data, ...res.data],
                            error: res.error || null,
                            loading: false,
                            fullData: res.data
                        })
                        Dataarray = this.state.data
                    })
                    .catch(error => {
                        this.setState({ error, loading: false })
                    })
            }, 500);


        }
    }

    renderHeader = () => (
        <View
            style={styles.renderHeader}>
            <TextInput
                style={{ height: 40, color: '#161616' }}
                placeholderTextColor='#161616'
                placeholder="Search"
                onChangeText={this.searchItems}
                defaultValue={this.state.text}
            />
        </View>
    )

    searchItems = (text) => {
        this.setState({
            text: text
        })
        console.log("ltextog", text);
        if (text == '') {
            this.setState({ data: this.state.fullData })
        }
        else {
            const newData = Dataarray.filter((items, i) => {
                const itemListData = `${items.first_name.toUpperCase()} ${items.last_name.toUpperCase()} ${items.email.toUpperCase()}`
                const textSearch = text.toUpperCase()

                return itemListData.indexOf(textSearch) > -1
            })
            this.setState({ data: newData })
        }


    };

    renderFooter = () => {
        if (!this.state.loading) {
            return null
        } else {
            return (
                <View
                    style={styles.renderFooter}>
                    <ActivityIndicator size="large" color="#161616" />
                </View>
            )
        }
    }

    loddata = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.getData()
            }
        )
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 5,
                    paddingVertical: 20,
                }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Details', {
                                email: item.email, firstname: item.first_name, lastname: item.last_name, avatar: item.avatar
                            })
                        }>
                            <View>
                                <Profile
                                    imageUri={item.avatar}
                                    first_name={item.first_name}
                                    last_name={item.last_name}
                                    email={item.email}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => String(index)}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.loddata}
                    onEndThreshold={0}
                />
            </View>
        )
    }
}


export default User;

const styles = StyleSheet.create({
    renderHeader: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },

    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})


