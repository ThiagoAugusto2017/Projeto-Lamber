import React, { Component } from 'react';

import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback as TWF,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Headers from '../components/header';
import Post from '../components/post';
import posts from '../data/posts';
import { fetchPosts } from '../store/actions/posts';
import styles from './styles/feed-styles';

class Feed extends React.Component {
  state = {
    posts: posts,
  };

  componentDidMount = () => {
    this.props.onFetchPosts();
  };

  render() {
    return (
      <View style={styles.container}>
        <Headers />
        <FlatList
          data={this.props.posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item}></Post>}
        ></FlatList>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
  };
};

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
