import React from 'react';
import { Container, Header, Title, Content, Button, Left, Body, Text, Form, Item, Label, Input, Right, Spinner} from 'native-base';
import { View, Alert } from 'react-native';
import { trySignup, tryLogin, profile} from '../hasuraApi';
//import ArticleList from './ArticleList';
import Notify from './Notify';

const clusterName = "disentanglement49";

const loginUrl = "https://auth." + clusterName + ".hasura-app.io/v1/login";

export default class AuthScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
      usernameTextBox : '',
      passwordTextBox : '',
      lastnameTextBox:'',
      ageTextBox :'' ,
      profTextBox:'',
     fontsAreLoaded: false,
	  }
  }

 /* async componentWillMount() {
    await loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({...this.state, fontsAreLoaded: true});
  }
*/
  handleLoginPressed = async () => {
    let resp = await tryLogin(this.state.usernameTextBox, this.state.passwordTextBox);
    if(resp.status !== 200){
      if (resp.status === 504) {
        Alert.alert("Network Error", "Check your internet connection" )
      } else {
        Alert.alert("Error", "Unauthorized, Invalid username or password")      
      }
    } else {
             this.setState({isLoggedIn:true})  
              }
    
  }

  handleSignupPressed = async () => {
     
    fetch('https://hooks.zapier.com/hooks/catch/2931424/z67mpy/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
            name: this.state.usernameTextBox,
            age: this.state.ageTextBox,
            profession: this.state.profTextBox
      
      }),
    });


    let resp = await trySignup(this.state.usernameTextBox, this.state.passwordTextBox);
       if(resp.status !== 200){
      if (resp.status === 504) {
       Alert.alert("Network Error", "Check your internet connection" )
      } else {
        Alert.alert("Error", "Password too short / User already exists")      
      }
    } else {
      let a =   await resp.json();
       console.log(a.hasura_id);
      let respp = await profile(this.state.ageTextBox,this.state.userNameTextBox,this.state.profTextBox,a.hasura_id);
      //let respp = await profilespreadsheet(this.state.ageTextBox,this.state.userNameTextBox,this.state.profTextBox,a.hasura_id);
 
      // this.setState({data:resp.json})  
       this.setState({isLoggedIn:true})  
  
  }
}

  handleUsernameChange = usernameTextBox => {
  	this.setState({
  		...this.state,
  		usernameTextBox: usernameTextBox
  	})
  }

    
  handlePasswordChange = passwordTextBox => {
  	this.setState({
  		...this.state,
  		passwordTextBox: passwordTextBox
  	})
  }

  handleAgeChange = ageTextBox => {
  	this.setState({
  		...this.state,
  		ageTextBox: ageTextBox
  	})
  }

  handleLastNameChange = lastNameTextBox => {
  	this.setState({
  		...this.state,
  		lastNameTextBox: lastNameTextBox
  	})
  }

  handleProfChange = profTextBox => {
  	this.setState({
  		...this.state,
  		profTextBox: profTextBox
  	})
  }
  handleIdChange = idTextBox => {
  	this.setState({
  		...this.state,
  		idTextBox: idTextBox
  	})
  }


  handleLogout = () => {
    this.setState({
      ...this.state,
      isLoggedIn: false
    })
  }

  render() {
	  //if (this.state.fontsAreLoaded == true) {
      if(this.state.isLoggedIn === true){
        return (
          //  <ArticleList logoutCallback={this.handleLogout}/> 
           <Notify logoutCallback={this.handleLogout}/> 

        );
      }
    
      return(
        <Container>
          <Content contentContainerStyle={{justifyContent:'center', margin: 20}}>
            <Form>
           
             <Item floatingLabel>
                <Label>Name</Label>
                <Input value={this.state.usernameTextBox} onChangeText={this.handleUsernameChange}/>
              </Item>
              <Item floatingLabel>
                <Label>Age</Label>
                <Input value={this.state.ageTextBox} onChangeText={this.handleAgeChange}/>
              </Item>
              <Item floatingLabel>
                <Label>Profession</Label>
                <Input value={this.state.profTextBox} onChangeText={this.handleProfChange}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input value={this.state.passwordTextbox} onChangeText={this.handlePasswordChange} secureTextEntry/>
              </Item>
              </Form>
            <View style = {{height:10}} />
            <Button block onPress={this.handleSignupPressed} >
              <Text> Sign up </Text>
            </Button>
           </Content>
        </Container>
      )
    //}
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color='black' />
        </Content>
      </Container>
    );
  }
}
