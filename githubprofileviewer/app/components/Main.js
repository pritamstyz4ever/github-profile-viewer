import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ActivityIndicator
} from 'react-native';

import Dashboard from './Dashboard';
import api from '../utils/api'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#488BEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    input: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            username: event.nativeEvent.text
        })
    }
    handleSubmit() {
        this.setState({
            isLoading: true
        });
        api.getBio(this.state.username).then((res) => {
            if(res.message === 'Not Found'){
                this.setState({
                    isLoading: false,
                    error: 'User not found'
                });
            } else {
                this.props.navigator.push({
                    title: res.name || "Select an option",
                    component: Dashboard,
                    passProps: {userInfo: res}
                })
                this.setState({
                    isLoading: false,
                    error: false,
                    username: ""
                })
            }
        })
    }
    render() {
        const error = (
             <Text> {this.state.error} </Text>
        )
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Search for a GitHub User </Text>
                <TextInput
                    style ={styles.input}
                    value ={this.state.username}
                    onChange = {this.handleChange}
                />
                <TouchableHighlight 
                    style = {styles.button}
                    onPress={this.handleSubmit}
                    underlayColor='white'
                    > 
                    <Text style = {styles.buttonText}>Search</Text>
                </TouchableHighlight>
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color='#111'
                    size='large'
                />
                {this.state.error && error}
            </View>
        );
    }
}
