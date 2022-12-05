import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 13,
  },

  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC',
  },
  textInput: {
    width: '90%',
  },
});

export default styles;
