import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 210,
    margin: 3,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  h1: {
    padding: 6,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.72)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.72)',
  },
});
