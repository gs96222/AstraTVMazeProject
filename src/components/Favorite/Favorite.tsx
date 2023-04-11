import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Show} from '../../types/interfaces';
import {styles} from './styles';

type FavoriteDisplayProps = {
  show: Show;
  liked: boolean;
  type: 'display';
};

type FavoriteButtonProps = {
  show: Show;
  liked: boolean;
  onLikePress: (show: Show) => void;
  type: 'button';
};

type FavoriteProps = FavoriteDisplayProps | FavoriteButtonProps;

const Favorite: React.FC<FavoriteProps> = props => {
  const handlesLikePress = () => {
    props.type === 'button' && props.onLikePress(props.show);
  };

  return (
    <Icon
      style={styles.icon}
      name={props.liked ? 'heart' : 'heart-o'}
      size={30}
      color="#f66"
      onPress={props.type === 'button' ? handlesLikePress : undefined}
    />
  );
};

export default Favorite;
