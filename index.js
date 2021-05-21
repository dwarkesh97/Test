/**
 * @format
 */
import React from 'react'

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Reducer from './src/redux/Reducer'


const store = createStore(Reducer)


const data = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => data);
