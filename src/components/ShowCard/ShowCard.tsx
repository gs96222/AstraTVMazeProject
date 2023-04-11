import React, {useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {setShowOfInterest} from '../../store/slicer/appSlicer';
import {useLinkTo} from '@react-navigation/native';
import Favorite from '../Favorite/Favorite';
import {Show} from '../../types/interfaces';
import {screens} from '../../utils/constants';

export default function ShowCards({showInfo}: {showInfo: Show}) {
  const linkTo = useLinkTo();
  const dispatch = useAppDispatch();
  const favoritesShows = useAppSelector(state => state.app.favoriteShows);

  const liked = useMemo(() => {
    const favoriteFound = favoritesShows.find(show => show.id === showInfo.id);
    return Boolean(favoriteFound?.id);
  }, [favoritesShows, showInfo.id]);

  function handlePress() {
    dispatch(setShowOfInterest(showInfo));
    linkTo(`${screens.ShowDetail}${showInfo.id}`);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <>
        <Image
          style={styles.image}
          source={{uri: showInfo?.image?.medium}}
          resizeMethod={'scale'}
        />
        <Text style={styles.h1}>{showInfo.name}</Text>
        <View style={styles.iconContainer}>
          <Favorite liked={liked} type="display" show={showInfo} />
        </View>
      </>
    </TouchableOpacity>
  );
}
