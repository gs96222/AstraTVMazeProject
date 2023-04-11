import React, {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {useAppSelector} from '../../hooks/useAppSelector';
import useShowsDetails from '../../hooks/useShowDetails';
import {RootStackParamList} from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import EpisodesList from '../../components/EpisodesList';
import ShowSummary from '../../components/ShowSummary';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Favorite from '../../components/Favorite/Favorite';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {
  addFavoriteShow,
  removeFavoriteShow,
  selectFavoriteShows,
} from '../../store/slicer/appSlicer';
import {Show} from '../../types/interfaces';

const ShowInfo = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'showDetail'>>();
  const insets = useSafeAreaInsets();
  const [isLiked, setIsLiked] = useState(false);

  const selectedShow = useAppSelector(state => state.app.showOfInterest);
  const selectedFavoriteShows = useAppSelector(selectFavoriteShows);
  const {episodesBySeason} = useShowsDetails(Number(params.screen));

  useEffect(() => {
    if (selectedShow) {
      const favFound = selectedFavoriteShows.find(
        show => show.id === selectedShow.id,
      );

      if (favFound?.id) {
        setIsLiked(true);
      }
    }
  }, [selectedFavoriteShows, selectedShow]);

  const dispatch = useAppDispatch();

  const handlesLikePress = (show: Show) => {
    setIsLiked(!isLiked);
    !isLiked
      ? dispatch(addFavoriteShow(show))
      : dispatch(removeFavoriteShow(show));
  };

  return (
    <ImageBackground
      style={[styles.posterView]}
      resizeMode="cover"
      source={{uri: selectedShow?.image?.original}}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollView,
          {paddingBottom: insets.bottom},
        ]}>
        <Text style={styles.h1}>{selectedShow?.name}</Text>
        <Text style={styles.h3}>{selectedShow?.genres.join(', ')}</Text>
        <View style={styles.scheduleView}>
          <Icon name={'calendar'} size={30} color={'white'} />
          <Text style={styles.h2}>
            {'Every ' + selectedShow?.schedule.days.join(', ')}
          </Text>
        </View>
        <View style={styles.scheduleView}>
          <Icon name={'clock-o'} size={30} color={'white'} />
          <Text style={styles.h2}>{'at ' + selectedShow?.schedule.time}</Text>
        </View>
        <View style={styles.scheduleView}>
          {selectedShow && (
            <Favorite
              show={selectedShow}
              type="button"
              liked={isLiked}
              onLikePress={handlesLikePress}
            />
          )}
          <Text style={styles.h2}>Mark as favorite</Text>
        </View>

        <ShowSummary summary={selectedShow?.summary} />

        {episodesBySeason?.map?.((season, i) => (
          <View style={{flexGrow: 20}} key={`season${i}`}>
            <Text style={styles.h2}>{`Season ${i}`}</Text>
            <EpisodesList season={season} />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default ShowInfo;
