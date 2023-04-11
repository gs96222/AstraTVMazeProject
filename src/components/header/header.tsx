import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Logo from '../../assets/tvm-logo.png';
import Search from '../Search';
import {useAppSelector} from '../../hooks/useAppSelector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  selectFavoriteIsEnabled,
  selectSearchIsEnabled,
  setHomeIsEnabled,
  toggleFavoriteIsEnabled,
} from '../../store/slicer/homeSlicer';
import {useAppDispatch} from '../../hooks/useAppDispatch';

const Header = () => {
  const dispatch = useAppDispatch();
  const selectedFavoriteIsEnabled = useAppSelector(selectFavoriteIsEnabled);
  const selectedSearchIsEnabled = useAppSelector(selectSearchIsEnabled);

  const handleFavoritePress = () => {
    dispatch(toggleFavoriteIsEnabled());
  };

  const handleLogoPress = () => {
    dispatch(setHomeIsEnabled());
  };

  return (
    <View style={styles.container}>
      {!selectedSearchIsEnabled && (
        <>
          <TouchableOpacity onPress={handleLogoPress}>
            <Image style={styles.image} source={Logo} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoritesContainer}
            onPress={handleFavoritePress}>
            <Icon
              style={styles.icon}
              name="push-pin"
              size={30}
              color={selectedFavoriteIsEnabled ? 'blue' : 'white'}
            />
            <Text style={styles.h3}> Favorites</Text>
          </TouchableOpacity>
        </>
      )}
      <Search />
    </View>
  );
};

export default Header;
