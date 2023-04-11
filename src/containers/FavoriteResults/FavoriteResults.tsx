import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppSelector} from '../../hooks/useAppSelector';
import ShowCard from '../../components/ShowCard';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {selectFavoriteShows} from '../../store/slicer/appSlicer';

const FavoriteResults = () => {
  const selectedFavoriteShows = useAppSelector(selectFavoriteShows);
  const [displayNoResults, setDisplayNoResults] = React.useState(false);
  const insets = useSafeAreaInsets();

  console.log('selectedFavoriteShows', selectedFavoriteShows);
  useEffect(() => {
    if (selectedFavoriteShows.length) {
      setDisplayNoResults(false);
    } else {
      setTimeout(() => setDisplayNoResults(true), 1500);
    }
  }, [setDisplayNoResults, selectedFavoriteShows]);

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      {selectedFavoriteShows.length ? (
        <FlatList
          style={[styles.results]}
          data={selectedFavoriteShows}
          renderItem={({item}) => <ShowCard showInfo={item} />}
          keyExtractor={(show, index) => String(show?.id || index)}
          numColumns={2}
        />
      ) : (
        displayNoResults && <Text style={styles.h1}>No Favorites found</Text>
      )}
    </View>
  );
};

export default FavoriteResults;
