import React from 'react';
import { View, StyleSheet,Alert,Linking } from 'react-native';
import { Container, Header,Title, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';


export default class Notify extends React.Component {
  
  render() {
    console.log("Notifying......")
    alert("saving details....");
    return (
      <Container>
        <View/>
            <Text>Notification</Text>
            <Text>Details saved successfully</Text>
            <Text>Check the link below</Text>
            <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://docs.google.com/spreadsheets/d/1I2H0-sIvmMh28Qhx1yXwM-8YFoEG-YV5alopHKhngw4/edit?usp=drivesdk') }>
            https://docs.google.com/spreadsheets/d/1I2H0-sIvmMh28Qhx1yXwM-8YFoEG-YV5alopHKhngw4/edit?usp=drivesdk</Text>
            
      </Container>
    );
  }
}


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  TextStyle: {
 
    color: '#E91E63',
    textDecorationLine: 'underline'
 
  }
});