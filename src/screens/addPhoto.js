import React, { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from './styles/addPhoto-styles';
import { connect } from 'react-redux';
import { addPost } from '../store/actions/posts';

class AddPhoto extends React.Component {
  state = {
    image: null,
    comment: '',
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.loading && !this.props.loading) {
      this.setState({
        image: null,
        comment: '',
      });
      this.props.navigation.navigate('Feed');
    }
  };

  pickImage = () => {
    if (!this.props.name && this.props.email) {
      Alert.alert('falha!', 'Precisa logar');
      return;
    }
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 600,
        maxWidth: 800,
      },
      (res) => {
        if (!res.didCancel) {
          this.setState({
            image: {
              uri: res.assets[0].uri,
              base64: res.assets[0].base64,
            },
          });
        }
      }
    );
  };
  pickPhoto = () => {
    if (!this.props.name && this.props.email) {
      Alert.alert('falha!', 'Precisa logar');
      return;
    }
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        saveToPhotos: true,
        maxHeight: 800,
        maxWidth: 1000,
      },
      (res) => {
        if (!res.didCancel) {
          this.setState({
            image: {
              uri: res.assets[0].uri,
              base64: res.assets[0].base64,
            },
          });
        }
      }
    );
  };

  save = async () => {
    this.props.onAddPosts({
      id: Math.random() * 100,
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>

          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>

          <View style={styles.buttomRow}>
            <TouchableOpacity
              onPress={this.pickPhoto}
              disabled={!this.props.name}
              style={styles.buttom}
            >
              <Text style={styles.buttomText}>Tirar uma foto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
              <Text style={styles.buttomText}>Escolha a sua foto</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Algum comentario para foto?"
            style={styles.input}
            value={this.state.comment}
            editable={this.props.name != null}
            onChangeText={(comment) => this.setState({ comment })}
          ></TextInput>

          <TouchableOpacity
            onPress={this.save}
            disabled={this.props.loading}
            style={[
              styles.buttom,
              this.props.loading ? styles.buttomDisabled : null,
            ]}
          >
            <Text style={styles.buttomText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ user, posts }) => {
  return {
    email: user.email,
    name: user.name,
    loading: posts.isUploading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPosts: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
