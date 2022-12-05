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
import styles from './style/author-styles';
import { Gravatar } from 'react-native-gravatar';

export default (props) => {
  return (
    <View style={styles.container}>
      <Gravatar
        options={{ email: props.email, secure: true }}
        style={styles.avatar}
      ></Gravatar>
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  );
};
