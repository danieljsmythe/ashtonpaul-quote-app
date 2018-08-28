import React, {Component} from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { ButtonGroup } from 'react-native-elements'; // 0.17.0

import table from '../api/table'

export default class LevelSurvey extends Component {

    state = {
        level: {},
        index: 0,
    }

    handleClick = (index) => {
        this.updateStateIndexes(index)
        this.calculateAnyPrice(index)
        console.log(this.state.level)
     }

    //updates the states for each of cases of buttons
    updateStateIndexes = index => this.setState({index: index})

    //calculates the prices of any selection of the button based on the button
    calculateAnyPrice = (index) => {
        if (index === 0) {
            this.setState(this.state.level=table.level.small)
        }

        if (index === 1) {
            this.setState(this.state.level=table.level.medium)
        }

        if (index === 2) {
            this.setState(this.state.level=table.level.large)
        }
    }

    render () {
        if (this.props.show === false) {
            return null
        }
        else {
            return (
                <View>
                    <Text style={styles.text} > Level Survey </Text>
                    <ButtonGroup
                    selectedTextStyle={{fontWeight: 'bold', color: 'white'}}
                    selectedButtonStyle={{backgroundColor: 'teal'}}
                    onPress={(index) => this.handleClick(index)}
                    selectedIndex={this.state.index}
                    buttons={['S', 'M', 'L']}
                    containerStyle={{height: 30}}
                    />
                </View>
            )
        }
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
