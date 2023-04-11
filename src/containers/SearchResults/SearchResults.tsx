import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectSearchText} from '../../store/slicer/searchSlicer';
import useSearch from '../../hooks/useSearch';
import ShowCard from '../../components/ShowCard';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function SearchResult() {
  const selectedSearchText = useAppSelector(selectSearchText);
  const [displayNoResults, setDisplayNoResults] = React.useState(false);
  const insets = useSafeAreaInsets();

  const {searchResults, isError} = useSearch(selectedSearchText);

  if (isError) {
  }

  useEffect(() => {
    if (searchResults.length) {
      setDisplayNoResults(false);
    } else {
      setTimeout(() => setDisplayNoResults(true), 1500);
    }
  }, [setDisplayNoResults, searchResults]);

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      {searchResults.length ? (
        <FlatList
          style={[styles.result]}
          data={searchResults}
          renderItem={({item}) => <ShowCard showInfo={item} />}
          keyExtractor={(show, index) => String(show?.id || index)}
          numColumns={2}
        />
      ) : (
        displayNoResults && <Text style={styles.h1}>No results found</Text>
      )}
    </View>
  );
}
