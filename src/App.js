import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import {Text, View} from 'react-native';
import LoginForm from './components/LoginForm';
import Router from'./Router';




class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyADfogxa2nkgK7aCBfOKbIvtoIDbE8Amp0',
            authDomain: 'auth-native-68d85.firebaseapp.com',
            databaseURL: 'https://auth-native-68d85.firebaseio.com',
            projectId: 'auth-native-68d85',
            storageBucket: 'auth-native-68d85.appspot.com',
            messagingSenderId: '906446458220'
          };
          firebase.initializeApp(config);
    }
    render() {
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      
            {/* <LoginForm /> */}
            <Router />
      
        </Provider>
      );
    }
};


export default App;
