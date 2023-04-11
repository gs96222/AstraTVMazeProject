import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'black',
    padding: 10,
  },
  image: {
    height: 40,
    width: 150,
  },
  favoritesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
  },
  h3: {
    color: 'white',
    fontSize: 12,
  },
  selected: {
    color: 'blue',
  },
});
