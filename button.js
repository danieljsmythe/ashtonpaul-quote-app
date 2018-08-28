import React, {Component} from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { ButtonGroup } from 'react-native-elements'; // 0.17.0

export default class Button extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text} > {this.props.title} </Text>
                <ButtonGroup
                selectedTextStyle={{fontWeight: 'bold', color: 'white'}}
                selectedButtonStyle={{backgroundColor: 'teal'}}
                onPress={(index) => this.handleClick(index)}
                selectedIndex={this.state.index}
                buttons={this.props.data}
                containerStyle={{height: 30}}
                />
            </View>
        )
    }
}


//styling of the application
const styles = StyleSheet.create({
    text: {
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: 'bold',
      paddingLeft: 10,
    },
});