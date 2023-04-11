import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {
  selectSearchIsEnabled,
  toggleSearchIsEnabled,
} from '../../store/slicer/homeSlicer';
import {setSearchText} from '../../store/slicer/searchSlicer';
// import {screens} from '../App';
import {styles} from './styles';

const Search = () => {
  const dispatch = useAppDispatch();
  const selectedSearchIsEnabled = useAppSelector(selectSearchIsEnabled);
  const selectedsearchText = useAppSelector(state => state.search.searchText);

  const handlesSearchPress = () => {
    if (selectedSearchIsEnabled) {
      dispatch(setSearchText(''));
    }
    dispatch(toggleSearchIsEnabled());
  };

  const handleChangeSearchText = (text: string) => {
    dispatch(setSearchText(text));
  };

  return (
    <View style={[styles.container]}>
      {selectedSearchIsEnabled && (
        <TextInput
          style={styles.input}
          value={selectedsearchText}
          onChangeText={handleChangeSearchText}
        />
      )}
      <Icon
        style={styles.icon}
        name={selectedSearchIsEnabled ? 'close' : 'search'}
        size={30}
        color="white"
        // backgroundColor={selectedSearchIsEnabled ? 'white' : 'transparent'}
        onPress={handlesSearchPress}
      />
    </View>
  );
};

export default Search;
