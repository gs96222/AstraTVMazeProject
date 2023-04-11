import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import ShowCard from '../../components/ShowCard';
import useShows from '../../hooks/useShows';
import {styles} from './styles';

const Shows = () => {
  const {showsPages, setPages, currentPages, isLoading} = useShows();
  const showsList = showsPages?.length ? showsPages.flat(1) : [];

  return (
    <>
      <FlatList
        data={showsList}
        keyExtractor={show => String(show.id)}
        renderItem={({item}) => <ShowCard showInfo={item} />}
        numColumns={3}
        onEndReached={() => setPages(currentPages + 1)}
        onEndReachedThreshold={0.9}
        progressViewOffset={200}
      />
      <View style={styles.activityIndicatorView}>
        {isLoading && <ActivityIndicator size="large" color="white" />}
      </View>
    </>
  );
};

export default Shows;
