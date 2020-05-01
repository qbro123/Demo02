
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreens from './screens/RootStackScreens';
function App() {
    return (
        <NavigationContainer>
            <RootStackScreens/>
        </NavigationContainer>
    );
}
export default App;
