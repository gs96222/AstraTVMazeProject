import React from 'react';
import {View} from 'react-native';
import Header from '../../components/header';
import FavoriteResults from '../../containers/FavoriteResults';
import SearchResult from '../../containers/SearchResults/SearchResults';
import Shows from '../../containers/Shows';
import {useAppSelector} from '../../hooks/useAppSelector';
import {
  selectFavoriteIsEnabled,
  selectHomeIsEnabled,
  selectSearchIsEnabled,
} from '../../store/slicer/homeSlicer';
import {styles} from './styles';

export default function HomeScreen() {
  const selectedHomeIsEnabled = useAppSelector(selectHomeIsEnabled);
  const selectedFavoriteIsEnabled = useAppSelector(selectFavoriteIsEnabled);
  const selectedSearchIsEnabled = useAppSelector(selectSearchIsEnabled);

  return (
    <View style={styles.container}>
      <Header />
      {selectedHomeIsEnabled && <Shows />}
      {selectedFavoriteIsEnabled && <FavoriteResults />}
      {selectedSearchIsEnabled && <SearchResult />}
    </View>
  );
}
