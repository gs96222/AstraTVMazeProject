import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Episode} from '../../types/interfaces';
import {styles} from './styles';

type EpisodeListProps = {
  season: Episode[];
};

const EpisodesList: React.FC<EpisodeListProps> = ({season}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        persistentScrollbar
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalScroll}>
        {season.map((episode, i) => (
          <TouchableOpacity key={`episode${episode.id}`}>
            <ImageBackground
              style={styles.imageBackground}
              resizeMode="cover"
              source={{uri: episode?.image?.medium}}>
              <Text style={styles.text}> {`${i + 1}. ${episode.name}`} </Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default EpisodesList;
