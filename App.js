import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './src/screens/Home';
import ProductDetails from './src/screens/ProductDetails';
import Explore from './src/screens/Explore';
import Account from './src/screens/Account';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
//All non default imports use curly braces:
import {Cart} from './src/screens/Cart';

import {CartIcon, CloseIcon} from './src/components/Navigation';
// ICONS
import Icon from 'react-native-vector-icons/Ionicons';

const tabStackScreenOptions = {
  headerRight: () => <CartIcon />,
};

//QUERY CLIENT:
const queryClient = new QueryClient();

const HomeStack = createStackNavigator();
const HomeStackNav = () => (
  <HomeStack.Navigator screenOptions={tabStackScreenOptions}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={ProductDetails}
      options={({route}) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const ExploreStack = createStackNavigator();
const ExploreStackNav = () => (
  <ExploreStack.Navigator screenOptions={tabStackScreenOptions}>
    <ExploreStack.Screen name="Explore" component={Explore} />
    <ExploreStack.Screen name="Details" component={ProductDetails} />
  </ExploreStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountStackNav = () => (
  <AccountStack.Navigator screenOptions={tabStackScreenOptions}>
    <AccountStack.Screen name="Account" component={Account} />
  </AccountStack.Navigator>
);
const MainTabs = createBottomTabNavigator();
const Tabs = () => (
  <MainTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: 'lightgray',
      tabBarActiveBackgroundColor: '#ff7171',
      // tabBarInactiveBackgroundColor: '#393232',
      tabBarstyle: {
        backgroundColor: '#a4ebf3',
        display: 'flex',
      },
    }}>
    <MainTabs.Screen
      name="HomeTab"
      component={HomeStackNav}
      options={{
        tabBarLabel: 'HomePage',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="home" color={'#393232'} size={26} />
        ),
      }}
    />
    <MainTabs.Screen
      name="ExploreTab"
      component={ExploreStackNav}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="earth" color={'#393232'} size={26} />
        ),
      }}
    />
    <MainTabs.Screen
      name="AccountTab"
      component={AccountStackNav}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="person" color={'#393232'} size={26} />
        ),
      }}
    />
  </MainTabs.Navigator>
);

//SIGN IN and SIGN UP AUTH SCREENS:
const Auth = createMaterialTopTabNavigator();
const AuthTabs = () => (
  <Auth.Navigator>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

const MainStack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="Root"
            component={Tabs}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Cart"
            component={Cart}
            //To display the Cart as a modal from the button to the top of the app:
            options={{presentation: 'modal', headerLeft: () => <CloseIcon />}}
          />
          <MainStack.Screen
            name="Auth"
            component={AuthTabs}
            //To display the sign in and sign up as a modal from the button to the top of the app:
            options={{presentation: 'modal', headerLeft: () => <CloseIcon />}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
// const styles = StyleSheet.create({
//   highlight: {
//     fontWeight: '700',
//   },
// });
