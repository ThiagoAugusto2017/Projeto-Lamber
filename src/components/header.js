import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Gravatar } from 'react-native-gravatar';
import { View, Text, Image } from 'react-native';
import icon from '../../assets/imgs/icon.png';
import styles from './style/header-style';

class Header extends Component {
  render() {
    const name = this.props.name || 'Anonymous';
    const gravatar = this.props.email ? (
      <Gravatar
        options={{ email: this.props.email, secure: true }}
        style={styles.avatar}
      />
    ) : null;

    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image}></Image>
          <Text style={styles.text}> Lambe Lambe</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { email: user.email, name: user.name };
};

export default connect(mapStateToProps, null)(Header);
