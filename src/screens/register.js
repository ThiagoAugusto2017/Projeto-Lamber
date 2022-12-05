import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { create } from '../store/actions/user';
import styles from './styles/register-styles';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="name"
          style={styles.input}
          autoFocus={true}
          keyboardType={'email-address'}
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
        ></TextInput>

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

        <TouchableOpacity
          onPress={() => {
            this.props.onCreateUser(this.state);
          }}
          style={styles.buttom}
        >
          <Text style={styles.buttomText}>Salve</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: (user) => dispatch(create(user)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
