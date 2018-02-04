import React from 'react';
import { Container, Header,Title, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import AuthScreen from './src/components/AuthScreen';
//import ArticleList from './src/components/ArticleList';
import Login from './src/components/Login';

export default class App extends React.Component {
  
  render() {
    console.log("App started")
    return (
      <Container>
        <Header>
          <Title>Zapier App</Title>
          </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="contact" /><Text>Login</Text></TabHeading>}>
            <Login logoutCallback = {this.backToLoginScreen}/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="contact" /><Text>Signup</Text></TabHeading>}>
          <AuthScreen logoutCallback = {this.backToLoginScreen}/>
          </Tab>
         </Tabs>
        
     
      </Container>
    );
  }
}

