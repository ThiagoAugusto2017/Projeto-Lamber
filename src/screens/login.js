import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../store/actions/user';
import { View, Text, TextInput } from 'react-native';

import styles from './styles/login-styles';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile');
    }
  };

  login = () => {
    this.props.onLogin({ ...this.state });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.input}
          autoFocus={true}
          keyboardType={'email-address'}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          autoFocus={true}
          secureTextEntry={true}
          keyboardType={'number-pad'}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>

        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>create new account...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
