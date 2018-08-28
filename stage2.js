import React, {Component} from 'react';
import { ScrollView,Button, StyleSheet, View, Switch, Text } from 'react-native';
import { Constants } from 'expo';
import { Dropdown } from 'react-native-material-dropdown'

import "@expo/vector-icons"; // 5.2.0

export default class Stage2Screen extends Component {
  static navigationOptions = {
    title: 'Stage2:',
  };

  state = {
    planningfee: { title: "not known", value: 0 },
    councilfee: { title: "not known", value: 0 },
    daylight: { title: "not known", value: 0 },
    consultant: { title: "not known", value: 0 },
    thameswater: { title: "not known", value: 0 },
    sap: { title: "not known", value: 0 },
    beams: 0,
    TWBOA: { checked: false, price: 0, },
    partywall: { checked: false, price: 0, },
    ammendaward: { checked: false, price: 0, },
    interim: { checked: false, price: 0, },
    signawards: { checked: false, price: 0, },
  }

  onChangeTextPlanning = (text) => {
    console.log(text)
    if (text === 'LDC/ Prior Approval/Minor Amend/Variation') {
      this.setState({planningfee: {title: text, value: 150}})
    }

    if (text === 'Householder') {
      this.setState({planningfee: {title: text, value: 225}})
    }

    if (text === 'Householder & Conservation') {
      this.setState({planningfee: {title: text, value: 300}})
    }

    if (text === 'Full Planning/ Change of Use') {
      this.setState({planningfee: {title: text, value: 450}})
    }
  }

  onChangeTextCouncil = (text) => {
    console.log(text)
    if (text === 'Full Planning/ Change of Use') {
      this.setState({councilfee: {title: text, value: 462}})
    }

    if (text === 'Householder') {
      this.setState({councilfee: {title: text, value: 206}})
    }

    if (text === 'Variation of Condition') {
      this.setState({councilfee: {title: text, value: 34}})
    }

    if (text === 'Minor Amendments') {
      this.setState({councilfee: {title: text, value: 234}})
    }
  }

  onChangeTextDayLight = (text) => {
    console.log(text)
    if (text === 'Small') {
      this.setState({daylight: {title: text, value: 1000}})
    }

    if (text === 'Medium') {
      this.setState({daylight: {title: text, value: 1500}})
    }

    if (text === 'Large') {
      this.setState({daylight: {title: text, value: 2000}})
    }
  }

  onChangeTextConsultant = (text) => {
    console.log(text)
    if (text === 'Car Parking Survey') {
      this.setState({consultant: {title: text, value: 'TBC'}})
    }

    if (text === 'Contaminated Land Survey') {
      this.setState({consultant: {title: text, value: 'TBC'}})
    }

    if (text === 'Soil Test') {
      this.setState({consultant: {title: text, value: 'TBC'}})
    }
  }

  onChangeTextBuildingControl = (text) => {
    console.log(text)
    // to do
  }

  onChangeTextThamesWater = (text) => {
    console.log(text)
    if (text === 'Small') {
      this.setState({thameswater: {title: text, value: 150}})
    }

    if (text === 'Medium') {
      this.setState({thameswater: {title: text, value: 225}})
    }

    if (text === 'Large') {
      this.setState({thameswater: {title: text, value: 300}})
    }
  }

  onChangeTextSAP = (text) => {
    console.log(text)
    if (text === 'Small') {
      this.setState({sap: {title: text, value: '175'}})
    }

    if (text === 'Medium') {
      this.setState({sap: {title: text, value: '200'}})
    }

    if (text === 'Large') {
      this.setState({sap: {title: text, value: '225'}})
    }
  }

  onChangeTextBeams = (text, index) => {
    console.log(index)
    this.setState({beams: (parseInt(text) * 120)})
    console.log(this.state.beams)
  }

  handleChangeTWBOA = () => {
    if (this.state.TWBOA.checked === false) {
      this.setState({TWBOA: {checked: true, price: 343} })
    }
    else {
      this.setState({TWBOA: {checked: false, price: 0} })
    }
  }

  handleChangePartyWall = () => {
    if (this.state.partywall.checked === false) {
      this.setState({partywall: {checked: true, price: 1500} })
    }
    else {
      this.setState({partywall: {checked: false, price: 0} })
    }
  }

  handleChangeAmmendAward = () => {
    if (this.state.ammendaward.checked === false) {
      this.setState({ammendaward: {checked: true, price: 150} })
    }
    else {
      this.setState({ammendaward: {checked: false, price: 0} })
    }
  }

  handleChangeInterim = () => {
    if (this.state.interim.checked === false) {
      this.setState({interim: {checked: true, price: 350} })
    }
    else {
      this.setState({interim: {checked: false, price: 0} })
    }
  }

  handleChangeSignAwards = () => {
    if (this.state.signawards.checked === false) {
      this.setState({signawards: {checked: true, price: 150} })
    }
    else {
      this.setState({signawards: {checked: false, price: 0} })
    }
  }

  render() {
    const { navigation } = this.props;
    const measure = navigation.getParam('measure', 'no data');
    const level = navigation.getParam('level', 'no data');
    const existing = navigation.getParam('existing', 'no data');
    const proposed = navigation.getParam('proposed', 'no data');
    const siteplan = navigation.getParam('siteplan', 'no data');
    const streetSceneExisting = navigation.getParam('streetSceneExisting', 'no data');
    const streetSceneProposed = navigation.getParam('streetSceneProposed', 'no data');

    let data = [
      {value: 'LDC/ Prior Approval/Minor Amend/Variation'},
      {value: 'Householder'},
      {value: 'Householder & Conservation'},
      {value: 'Full Planning/ Change of Use'}
    ];

    let data2 = [
      {value: 'Householder'},
      {value: 'Full Planning/ Change of Use'},
      {value: 'Variation of Condition'},
      {value: 'Minor Amendments'}
    ];

    let dataSML = [
      {value: 'Small'},
      {value: 'Medium'},
      {value: 'Large'}
    ];

    let data3 = [
      {value: 'Car Parking Survey'},
      {value: 'Contaminated Land Survey'},
      {value: 'Soil Test'}
    ];

    let data4 = [
      {value: 'Bromley'},
      {value: 'Croydon'},
      {value: 'Epsom & Ewell'},
      {value: 'Kingston'},
      {value: 'Lambeth'},
      {value: 'Lewisham'},
      {value: 'Merton'},
      {value: 'Reigate & Banstead/Tandridge/Mole Valley'},
      {value: 'Richmond'},
      {value: 'Southwark'},
      {value: 'Sutton'},
      {value: 'Wandsworth'},
      {value: 'Woking'},
    ];

    let data5 = [
      {value: '1'},
      {value: '2'},
      {value: '3'},
      {value: '4'},
      {value: '5'},
      {value: '6'},
      {value: '7'},
      {value: '8'},
      {value: '9'},
      {value: '10'},
      {value: '11'},
      {value: '12'},
      {value: '13'},
    ];

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1} > A) Planning Fee </Text>

        <Dropdown
          containerStyle={styles.dropdown}
          label='Planning Architectural Fee'
          data={data}
          onChangeText={this.onChangeTextPlanning}
          />

        {/* <Text> The field selected was {this.state.planningfee.title} and its price is £{this.state.planningfee.value}  </Text> */}

        <Dropdown
          containerStyle={styles.dropdown}
          label='Council Planning Application Fee'
          data={data2}
          onChangeText={this.onChangeTextCouncil}
        />

        {/* <Text> The field selected was {this.state.councilfee.title} and its price is £{this.state.councilfee.value}  </Text> */}

        <Dropdown
          containerStyle={styles.dropdown}
          label='Daylight Assessment'
          data={dataSML}
          onChangeText={this.onChangeTextDayLight}
        />

        {/* <Text> The field selected was {this.state.daylight.title} and its price is £{this.state.daylight.value}  </Text> */}

        <Dropdown
          containerStyle={styles.dropdown}
          label='Specialist Consultant Fees'
          data={data3}
          onChangeText={this.onChangeTextConsultant}
        />

        {/* <Text> The field selected was {this.state.consultant.title} and its price is £{this.state.consultant.value}  </Text> */}

        <Text style={styles.h1} > B) Building Control Drawings & Application </Text>

        <Dropdown
          containerStyle={styles.dropdown}
          label='How many Beams are there?'
          data={data5}
          onChangeText={(value, id) => this.onChangeTextBeams(value, id)}
        />

        <Dropdown
          containerStyle={styles.dropdown}
          label='Council Building Control Full Plans Fee'
          data={data4}
          onChangeText={this.onChangeTextBuildingControl}
        />

        <Dropdown
          containerStyle={styles.dropdown}
          label='Thames Water Build Over Agreement'
          data={dataSML}
          onChangeText={this.onChangeTextThamesWater}
        />

        <Text style={styles.new}> Should we include a fee as well? </Text>

         <View style={styles.switch}>
          <Text style={styles.normal}> TWBOA Fee: </Text>
          <Switch
            value={this.state.TWBOA.checked}
            onValueChange={this.handleChangeTWBOA}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <Dropdown
          containerStyle={styles.dropdown}
          label='SAP Calculations (For Large Glazed Areas)'
          data={dataSML}
          onChangeText={this.onChangeTextSAP}
        />

        <Text style={styles.h1} > C) Party Wall Fee </Text>

        <Text style={styles.new}> Does the client need Party Wall? </Text>

        <View style={styles.switch}>
          <Text style={styles.normal}> Party Wall Fee: </Text>
          <Switch
            value={this.state.partywall.checked}
            onValueChange={this.handleChangePartyWall}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <Text style={styles.text}> Building Owners Surveying Fee </Text>

        <View style={styles.switch}>
          <Text style={styles.normal}> Ammend Award and Method Statements: </Text>
          <Switch
            value={this.state.ammendaward.checked}
            onValueChange={this.handleChangeAmmendAward}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <View style={styles.switch}>
          <Text style={styles.normal}> Interim Inspection: </Text>
          <Switch
            value={this.state.interim.checked}
            onValueChange={this.handleChangeInterim}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <Text style={styles.text}> Adjoinging Owner's Surveying Fee </Text>

        <View style={styles.switch}>
          <Text style={styles.normal}> Sign Awards and Publish: </Text>
          <Switch
            value={this.state.signawards.checked}
            onValueChange={this.handleChangeSignAwards}
            onTintColor={'teal'}
            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Get your Quote"
            onPress={() => {
              /* 1. Navigate to the Price Route with params */
              this.props.navigation.navigate('Price', {
                measure: measure,
                level: level,
                existing: existing,
                proposed: proposed,
                siteplan: siteplan,
                streetSceneExisting: streetSceneExisting,
                streetSceneProposed: streetSceneProposed,
                planning: this.state.planningfee.value,
                council: this.state.councilfee.value,
                daylight: this.state.daylight.value,
                consultant: this.state.consultant.value,
                thameswater: this.state.thameswater.value,
                sap: this.state.sap.value,
                TWBOA: this.state.TWBOA.price,
                partywall: this.state.partywall.price,
                ammendaward: this.state.ammendaward.price,
                interim: this.state.interim.price,
                signawards: this.state.signawards.price,
                beams: this.state.beams,
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

  h1: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  dropdown: {
    paddingRight: 10,
    paddingLeft: 10,
  },

  normal: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  new: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },

  text: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
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

  button: {
    paddingTop: 20,
  }

});