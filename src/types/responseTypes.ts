import {Episode, Show} from './interfaces';

export type UseShowsResponse = {
  showsPages: Show[][];
  currentPages: number;
  setPages: Function;
  isLoading: boolean;
  isError: boolean;
};

export type UseSearchShowsResponse = {
  searchResults: Show[];
  isLoading: boolean;
  isError: boolean;
};

export type UseShowEpisodesResponse = {
  episodesBySeason: Episode[][];
  isLoading: boolean;
  isError: boolean;
};
