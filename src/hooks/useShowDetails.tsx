import useSWR from 'swr';
import {Episode} from '../types/interfaces';
import {UseShowEpisodesResponse} from '../types/responseTypes';
import fetcher from '../utils/fetcher';

const useShowsDetails = (showId: number): UseShowEpisodesResponse => {
  const key = showId ? `/shows/${showId}/episodes?specials=1` : null;
  const {data: episodes, error} = useSWR(key, fetcher);

  const episodesBySeason: Episode[][] = [];
  episodes?.forEach((episode: Episode) => {
    episodesBySeason[episode.season] = episodesBySeason[episode.season]
      ? [...episodesBySeason[episode.season], episode]
      : [episode];
  });

  return {
    episodesBySeason: episodes ? episodesBySeason : [],
    isLoading: !error && !episodes,
    isError: error,
  };
};

export default useShowsDetails;
