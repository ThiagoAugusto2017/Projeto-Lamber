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
import styles from './style/commets-styles';
import Author from './author';

class Comments extends React.Component {
  render() {
    let viewComments = null;
    if (this.props.comments) {
      viewComments = this.props.comments.map((comment, index) => {
        return (
          <View style={styles.commentContainer} key={index}>
            <Text style={styles.nickname}> {comment.nickname}:</Text>
            <Text style={styles.comment}> {comment.comment}</Text>
          </View>
        );
      });
    }
    return <View style={styles.container}>{viewComments}</View>;
  }
}

export default Comments;
