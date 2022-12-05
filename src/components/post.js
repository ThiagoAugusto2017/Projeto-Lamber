import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment/moment';
import 'moment/locale/pt-br';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style/post-styles';
import Author from './author';
import Comments from './comments';
import AddComments from './addComments';
import { connect } from 'react-redux';

class Post extends React.Component {
  state = {
    email: this.props.user.email,
    name: this.props.user.name,
  };
  render() {
    const isLogged =
      this.state.email && this.state.name ? (
        <AddComments id={this.props.id} />
      ) : null;
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.image }} style={styles.image}></Image>
        <Author
          email={this.props.email}
          nickname={this.props.nickname}
        ></Author>
        <Comments comments={this.props.comments} />
        {isLogged}
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user,
  };
};

export default connect(mapStateToProps, null)(Post);
