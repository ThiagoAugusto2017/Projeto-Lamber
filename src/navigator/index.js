import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Feed from '../screens/feed';
import AddPhoto from '../screens/addPhoto';
import Profile from '../screens/profile';
import Login from '../screens/login';
import Register from '../screens/register';

const Tab = createBottomTabNavigator();
const SwitchStack = createStackNavigator();
const AuthStack = createStackNavigator();

const routeIcon = {
  Feed: 'home',
  AddPhoto: 'camera',
  Profile: 'person',
  Calendar: 'calendar',
};

function navigation(props) {
  const state = {
    email: props.email,
  };

  const Auth = () => (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );

  const AuthOrProfile = (props) => (
    <SwitchStack.Navigator screenOptions={{ headerShown: false }}>
      {state.email ? (
        <SwitchStack.Screen name="Home" component={Profile} />
      ) : (
        <SwitchStack.Screen name="Auth" component={Auth} />
      )}
    </SwitchStack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={routeIcon[route.name]} size={size} color={color} />
          ),
        })}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen
          name="AddPhoto"
          component={state.email ? AddPhoto : AuthOrProfile}
        />
        <Tab.Screen name="Profile" component={AuthOrProfile} />
        <Tab.Screen name="Calendar" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({ user }) => {
  return { email: user.email, name: user.name };
};

export default connect(mapStateToProps, null)(navigation);
