import React, {Component} from 'react'
import { ScrollView, View, Button, StyleSheet, Text, Switch } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements'; // 0.17.0
import { Dropdown } from 'react-native-material-dropdown';
import { createStore } from 'redux';

import table from './api/table'; // importing the data tables
import LevelSurvey from './components/levelsurvey';
import ButtonForm from './components/button';
// import { handleClickApp } from './store/reducers';
// import { HANDLE_CLICK, buttonClick } from './store/action';

import "@expo/vector-icons"; // 5.2.0

export default class Stage1Screen extends Component {
  static navigationOptions = {
    title: 'Stage1:',
  };

  state = {
    indexMeasured: 0,
    indexExisting: 0,
    indexProposed: 0,
    measured: {price:0,},
    existing: {price:0,},
    level:  {price:0,},
    proposed: {price:0,},
    development: {
      checked: false,
    },
    siteplan: {
      checked: false,
      price: 0,
    },
    streetSceneExisting: {
      checked: false,
      price: 0,
    },
    streetSceneProposed: {
      checked: false,
      price: 0,
    },
    colour: {
      checked: false,
      price: 0,
    },
    render3d: {
      checked: false,
      price: 0,
    },
  }


  handleClick = (index, value) => {
    this.updateStateIndexes(index, value)
    this.calculateAnyPrice(index, value)
  }

  //updates the states for each of cases of buttons
  updateStateIndexes = (index, value) => {
    if (value === "measured") {
      this.setState({indexMeasured: index})
    }
    if (value === "existing") {
      this.setState({indexExisting: index})
    }
    if (value === "proposed") {
      this.setState({indexProposed: index})
    }
  }

  //calculates the prices of any selection of the button based on the button
  calculateAnyPrice = (index, value) => {
    switch (value) {
      case "measured":
        if (index === 0) {
          this.setState(this.state.measured=table.measured.small)
        }

        if (index === 1) {
          this.setState(this.state.measured=table.measured.medium)
        }

        if (index === 2) {
          this.setState(this.state.measured=table.measured.large)
        }

        if (index === 3) {
          this.setState(this.state.measured=table.measured.xLarge)
        }

        if (index === 4) {
          this.setState(this.state.measured=table.measured.xxLarge)
        }

      case "existing":
        if (index === 0) {
          this.setState(this.state.existing=table.planAndElevations.small)
        }

        if (index === 1) {
          this.setState(this.state.existing=table.planAndElevations.medium)
        }

        if (index === 2) {
          this.setState(this.state.existing=table.planAndElevations.large)
        }

        if (index === 3) {
          this.setState(this.state.existing=table.planAndElevations.xLarge)
        }

      case "proposed":
        if (index === 0) {
          this.setState(this.state.proposed=table.proposedPlans.small)
        }

        if (index === 1) {
          this.setState(this.state.proposed=table.proposedPlans.medium)
        }

        if (index === 2) {
          this.setState(this.state.proposed=table.proposedPlans.large)
        }

        if (index === 3) {
          this.setState(this.state.proposed=table.proposedPlans.xLarge)
        }
    }
  }

  // on change of text in the dropdown
  onChangeTextExisting = (text) => {
    console.log(text)
    if (text === 'Small - Terraced House') {
      this.setState(this.state.existing=table.planAndElevations.small)
    }

    if (text === 'Medium - Semi Detached') {
      this.setState(this.state.existing=table.planAndElevations.medium)
    }

    if (text === 'Large - Detached') {
      this.setState(this.state.existing=table.planAndElevations.large)
    }

    if (text === 'X Large - Large Detached') {
      this.setState(this.state.existing=table.planAndElevations.xLarge)
    }
  }

  handleChangeSitePlan = () => {
    if (this.state.siteplan.checked === false) {
      this.setState({siteplan: {checked: true, price: 75} })
      console.log(this.state.siteplan.checked)
    }
    else {
      this.setState({siteplan: {checked: false, price: 0} })
    }
  }

  handleChangeStreetSceneExisting = () => {
    if (this.state.streetSceneExisting.checked === false) {
      this.setState({streetSceneExisting: {checked: true, price: 75} })
    }
    else {
      this.setState({streetSceneExisting: {checked: false, price: 0} })
    }
  }

  handleChangeStreetSceenProposed = () => {
    if (this.state.streetSceneProposed.checked === false) {
      this.setState({streetSceneProposed: {checked: true, price: 75} })
    }
    else {
      this.setState({streetSceneProposed: {checked: false, price: 0} })
    }
  }

  handleChangeColour = () => {
    if (this.state.colour.checked === false) {
      this.setState({colour: {checked: true, price: 750} })
    }
    else {
      this.setState({colour: {checked: false, price: 0} })
    }
  }

  handleChangeDevelopment = () => {
    if (this.state.development.checked === false) {
      this.setState({development: {checked: true}})
    }
    else {
      this.setState({development: {checked: false}})
    }
  }

  handleChangeRender3D = () => {
    if (this.state.render3d.checked === false) {
      this.setState({render3d: {checked: true, price: 750} })
    }
    else {
      this.setState({render3d: {checked: false, price: 0} })
    }
  }

  render() {
    let data = [{
      value: 'Small - Terraced House',
    }, {
      value: 'Medium - Semi Detached',
    }, {
      value: 'Large - Detached',
    }, {
      value: 'X Large - Large Detached',
    }];

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1} > Design & Drawing Fee </Text>

        <Text style={styles.text} > Measured Survey </Text>
        {/* { this.renderMeasuredPrice() } */}

        <ButtonGroup
        selectedButtonStyle={{backgroundColor: 'teal'}}
        selectedTextStyle={{fontWeight: 'bold', color: 'white'}}
        onPress={(index) => this.handleClick(index, "measured")}
        selectedIndex={this.state.indexMeasured}
        buttons={['S', 'M', 'L', 'XL', 'XXL']}
        containerStyle={{height: 30}}
        underlayColor="teal" />

        <View style={styles.switch}>
          <Text style={styles.normal}> Is this a development site? </Text>
          <Switch
            value={this.state.development.checked}
            onValueChange={this.handleChangeDevelopment}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <LevelSurvey show={this.state.development.checked} title={this.state.level} />

        <Dropdown
          containerStyle={styles.dropdown}
          label='Existing Plans and Elevations'
          fontSize= {14}
          data={data}
          onChangeText={this.onChangeTextExisting}
        />

        <Text style={styles.text} > Proposed Plans </Text>

        <ButtonGroup
        selectedTextStyle={{fontWeight: 'bold', color: 'white'}}
        selectedButtonStyle={{backgroundColor: 'teal'}}
        onPress={(index) => this.handleClick(index, "proposed")}
        selectedIndex={this.state.indexProposed}
        buttons={['S', 'M', 'L', 'XL']}
        containerStyle={{height: 30}}/>

        <Text style={styles.text} > Additional Planning Drawings </Text>
        <View style={styles.switch}>
          <Text style={styles.normal}> Site and Block Plans: </Text>
          <Switch
            value={this.state.siteplan.checked}
            onValueChange={this.handleChangeSitePlan}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <Text style={styles.text}> Street Scene Elevation: </Text>

        <View style={styles.switch}>
          <Text style={styles.normal}> Existing: </Text>
          <Switch
            value={this.state.streetSceneExisting.checked}
            onValueChange={this.handleChangeStreetSceneExisting}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <View style={styles.switch}>
          <Text style={styles.normal}> Proposed: </Text>
          <Switch
            value={this.state.streetSceneProposed.checked}
            onValueChange={this.handleChangeStreetSceenProposed}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <Text style={styles.text} > Enhanced Drawings </Text>

        <View style={styles.switch}>
          <Text style={styles.normal}> Colour Render: </Text>
          <Switch
            value={this.state.colour.checked}
            onValueChange={this.handleChangeColour}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <View style={styles.switch}>
          <Text style={styles.normal}> 3D Render: </Text>
          <Switch
            value={this.state.render3d.checked}
            onValueChange={this.handleChangeRender3D}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Continue to Stage2"
            onPress={() => {
              /* 1. Navigate to the Price Route with params */
              this.props.navigation.navigate('Stage2', {
                measure: this.state.measured.price,
                level: this.state.level.price, // need to look into redux for state management when I clean this up
                existing: this.state.existing.price,
                proposed: this.state.proposed.price,
                siteplan: this.state.siteplan.price,
                streetSceneExisting: this.state.streetSceneExisting.price,
                streetSceneProposed: this.state.streetSceneProposed.price,
                colour: this.state.colour.price,
                render3d: this.state.render3d.price,
              });
            }}
          />
          </View>

      </ScrollView>
    );
  }
}

//styling of the application
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

  text: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
  },

  normal: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  h1: {
    paddingBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  switch:  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3,
    borderColor: 'teal',
    borderBottomWidth: 0.6,
    borderTopWidth: 0.6,
    backgroundColor: 'white',
  },

  dropdown: {
    paddingRight: 10,
    paddingLeft: 10
  },

  button: {
    paddingTop: 20,
  }

});