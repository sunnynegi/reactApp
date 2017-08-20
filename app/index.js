import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import MainScreenNavigator from './config/route'

class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <MainScreenNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})

export default App