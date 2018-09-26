import React, {Component} from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { LoginView, HomeView } from './components/screens';


/* const queryIcon = (tintColor) => {
  return(<Image style={{width:25, height:25, tintColor: tintColor}} 
  source={Config.images.iconSearch}></Image>);
}

const listIcon = (tintColor) => {
  return(<Image style={{width:25, height:25, tintColor: tintColor}} 
  source={Config.images.iconList}></Image>);
}

const infoIcon = (tintColor) => {
  return(<Image style={{width:25, height:25, tintColor: tintColor}} 
  source={Config.images.iconInfo}></Image>);
}
 */






const Tabs = createBottomTabNavigator({
    home: {
      screen: HomeView,
      navigationOptions: ({navigation}) => ({
        title: "Sorgula",
       /*  tabBarIcon: ({focused, tintColor}) => {
          return queryIcon(tintColor)
        } */
         
      })
    } ,
   /*  queriedList: {
      screen: QueriedList,
      navigationOptions: ({navigation}) => ({
        title: "Sorgulananlar",
        tabBarIcon: ({focused, tintColor}) => {
          return listIcon(tintColor)
        }
      })
    },
    about: {
      screen: About,
      navigationOptions: ({navigation}) => ({
        title: "Hakkında",
        tabBarIcon: ({focused, tintColor}) => {
          return infoIcon(tintColor)
        }
      })
    } */
},
{
  navigationOptions: ({navigation}) => ({

  }),

  tabBarOptions: {
    activeTintColor: '#3B4872',
    inactiveTintColor: '#9AA4C7',
  },
}
);


const IntroStact = createStackNavigator({
    login: {
        screen: LoginView,
        navigationOptions: ({navigation}) => ({
            title: "Login",
            header: null
        }) 
    },
    /* register: {
        screen: Register,
        navigationOptions: ({navigation}) => ({
            title: "Register"
        })
    } */
}
);

const MainStack = createStackNavigator({
  intro: {
    screen: IntroStact,
    navigationOptions: ({navigation}) => ({
      title: "RN Test Project",
      header: null,
      headerMode: 'none',
      navigationOptions: {
        header: null
      } 
     
    })
  },  
  main: {  
    screen: Tabs,
    navigationOptions: ({navigation}) => ({
            title: "RN Test Project", 
            //headerStyle : s.header,
            //headerTitleStyle: s.headerTitle,
    })
  }
}
);


export default class RNTestProject extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
     <MainStack />
    );
  }
}