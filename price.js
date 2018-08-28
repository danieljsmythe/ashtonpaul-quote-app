import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class PriceScreen extends Component {
  static navigationOptions = {
    title: 'Quote',
  };
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Description', 'Price exc VAT'],
      tableTitle: ['Stage1', 'Stage2a','Stage2a','Stage2a', 'Stage2a Total','Stage2b',
      'Stage2b','Stage2b','Stage2b', 'Stage2b Total','Stage2c','Stage2c','Stage2c Total','Total'],
      tableData: [ ]
    }
  }



  componentDidMount = () => {
    const { navigation } = this.props;
    const measure = navigation.getParam('measure', 'no data');
    const level = navigation.getParam('level', 'no data');
    const existing = navigation.getParam('existing', 'no data');
    const proposed = navigation.getParam('proposed', 'no data');
    const siteplan = navigation.getParam('siteplan', 'no data');
    const streetSceneExisting = navigation.getParam('streetSceneExisting', 'no data');
    const streetSceneProposed = navigation.getParam('streetSceneProposed', 'no data');
    const daylight = navigation.getParam('daylight', 'no data');
    const planning = navigation.getParam('planning', 'no data');
    const council = navigation.getParam('council', 'no data');
    const consultant = navigation.getParam('consultant', 'no data');
    const thameswater = navigation.getParam('thameswater', 'no data');
    const sap = navigation.getParam('sap', 'no data');
    const beams = navigation.getParam('beams', 'no data');
    const TWBOA = navigation.getParam('TWBOA', 'no data');
    const partywall = navigation.getParam('partywall', 'no data');
    const ammendaward = navigation.getParam('ammendaward', 'no data');
    const interim = navigation.getParam('interim', 'no data');
    const signawards = navigation.getParam('signawards', 'no data');
    const stage1 = parseInt(measure) + parseInt(existing)
    + parseInt(proposed) +  parseInt(siteplan) + parseInt(streetSceneExisting) + parseInt(streetSceneProposed) // add back in level
    const othersA = parseInt(planning) + parseInt(council) + parseInt(daylight) // need to add consultant in when it works + parseInt(consultant)
    const buildingcontrol = stage1 + 250
    const stage2a = othersA + council + planning
    const othersB = parseInt(thameswater) + parseInt(sap) + parseInt(TWBOA)
    const stage2b = buildingcontrol + othersB // need to add the todos from below
    const buildingowners = 1200 + parseInt(ammendaward) + parseInt(interim)
    const adjoingowners = 1275 + parseInt(signawards)
    const stage2c = parseInt(partywall) + parseInt(buildingowners) + parseInt(adjoingowners)
    const total = stage1 + stage2a + stage2b + stage2c

    console.log("this is measure " + measure)
    console.log("this is level " + level)
    console.log("this is proposed " + proposed)
    console.log("this is siteplan " + siteplan)
    console.log("this is streetSceneExisting " + streetSceneExisting)
    console.log("this is streetSceneProposed " + streetSceneProposed)

    this.setState({
        tableData: [
            ["Design and Drawing Fee", "£" + stage1 ],
            ["A.1: Planning Architectual Fee", "£" + planning],
            ["A.2: Council Planning Application Fee", "£" + council,],
            ["A.3: Other", "£" + othersA,],
            ["Planning Fee Total","£" + stage2a,],
            ["B.1: Building Control Architectural Fee", "£" + buildingcontrol,],
            ["B.2: Structural Calculations", "£" + beams,],
            ["B.3: Council Building Fee", "NA need to add",],
            ["B.4: Other(s)",  "£" + othersB,],
            ["Building Control Fee Total", "£" + stage2b,],
            ["C.1: Building Owner's Surveying Fee", "£" + buildingowners,],
            ["C.2: Adjoining Owner's Surveying Fee", "£" + adjoingowners,],
            ["Party Wall Fee", "£" + partywall,],
            ["Total of all the work", "£" + total,],
        ]
    })
  }

  render() {
    const state = this.state;

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.h1}> Price Table </Text>
          <Table>
            <Row data={state.tableHead} flexArr={[1, 2, 1]} style={styles.head} textStyle={styles.textheader}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
              <Rows data={state.tableData} flexArr={[ 2, 1]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
          </Table>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {paddingLeft: 10, paddingRight: 10,},
  head: {  height: 40,  backgroundColor: 'teal'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#0ef9e2' },
  row: {  height: 28  },
  textheader: {
    paddingLeft: 4,
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
  text: { paddingLeft: 4, fontSize: 10, },
  h1: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
});