import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').width / 1,
    backgroundColor: '#D3D3D3	',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 1,
    resizeMode: 'center',
  },
  buttomRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4682B4',
  },
  buttomText: {
    fontSize: 20,
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
  buttomDisabled: {
    backgroundColor: '#666',
  },
});

export default styles;
