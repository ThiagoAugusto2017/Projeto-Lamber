import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { logout } from '../store/actions/user';
import { connect } from 'react-redux';

import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback as TWF,
  TextInput,
  FlatList,
} from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/profile-styles';

class Profile extends React.Component {
  logout = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Profile');
  };

  render() {
    const options = {
      email: this.props.email,
      secure: true,
      nickname: this.props.name,
    };
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar}></Gravatar>
        <Text style={styles.nickname}>{options.nickname}</Text>
        <Text style={styles.email}>{options.email}</Text>

        <TouchableOpacity onPress={this.logout} style={styles.button}>
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { email: user.email, name: user.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
