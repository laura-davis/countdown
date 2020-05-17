import React from 'react';
import {Text, View, TouchableHighlight, TextInput, StyleSheet} from "react-native";

export default class EventForm extends React.Component {
    handleAddPress = () => {
        this.props.navigation.navigate('list');
    };

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={styles.fieldContainer}>
                    <TextInput style={styles.text}/>
                </View>
                <TouchableHighlight onPress={this.handleAddPress}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff'
},
    text:  {
    height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    }
});