import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Temp = () => null;

const MainTabs = createBottomTabNavigator();
const Tabs = () => (
  <MainTabs.Navigator screenOptions={{headerShown: false}}>
    <MainTabs.Screen
      name="HomeTab"
      component={Temp}
      options={{tabBarLabel: 'Home'}}
    />
    <MainTabs.Screen
      name="ExploreTab"
      component={Temp}
      options={{tabBarLabel: 'Explore'}}
    />
    <MainTabs.Screen
      name="AccountTab"
      component={Temp}
      options={{tabBarLabel: 'Account'}}
    />
  </MainTabs.Navigator>
);

const MainStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Root" component={Tabs} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// const styles = StyleSheet.create({
//   highlight: {
//     fontWeight: '700',
//   },
// });
