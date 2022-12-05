import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback as TWF,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment/moment';
import 'moment/locale/pt-br';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style/addCommets-styles';
import { connect } from 'react-redux';
import { addComment } from '../store/actions/posts';

class AddComments extends React.Component {
  state = {
    comments: '',
    editComments: false,
  };

  handleAddComments = () => {
    this.props.onAddComments({
      id: this.props.id,
      comments: {
        nickname: this.props.name,
        comment: this.state.comments,
      },
    });
    this.setState({ comments: '', editComments: false });
  };

  render() {
    let commentsArea = null;

    if (this.state.editComments) {
      commentsArea = (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder={'Adicione comentarios...'}
            autoFocus={true}
            value={this.state.comments}
            onChangeText={(comments) => this.setState({ comments })}
            onSubmitEditing={this.handleAddComments}
          ></TextInput>
          <TWF onPress={() => this.setState({ editComments: false })}>
            <Icon name="times-circle" size={15} color="#555"></Icon>
          </TWF>
        </View>
      );
    } else {
      commentsArea = (
        <TWF onPress={() => this.setState({ editComments: true })}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555"></Icon>
            <Text style={styles.caption}>Adicione comentarios...</Text>
          </View>
        </TWF>
      );
    }

    return <View style={{ flex: 1 }}>{commentsArea}</View>;
  }
}

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComments: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComments);
