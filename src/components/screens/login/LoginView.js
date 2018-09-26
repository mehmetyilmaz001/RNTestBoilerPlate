import React, {Component} from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import style from './style';

class LoginView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={[style.loginPageContainer]}>
                
               <Text>Test Sistemine Hoşgeldniz</Text>

                <View style={style.loginFormContainer}>
                    <TextInput placeholder="Kullanıcı Adı"  style={style.input}  />

                    <TextInput  secureTextEntry={true}  placeholder="Şifre" style={style.input} />

                    <Text>Oturum Sürekli Kalsın</Text>
                    <Switch />
                    
                    <Button title="Giriş" onPress={() => this.login()}/>
                </View>
            </View>
        )
    }

    login(event){
        console.log("do login")
        this.props.navigation.navigate("main");
    }

    componentDidMount(){
        console.log(this.props)   
    }
}


export default LoginView