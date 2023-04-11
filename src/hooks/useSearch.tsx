import useSWR from 'swr';
import {Show} from '../types/interfaces';
import {UseSearchShowsResponse} from '../types/responseTypes';
import fetcher from '../utils/fetcher';

const useSearch = (searchText: string): UseSearchShowsResponse => {
  const key = searchText ? `/search/shows?q=${searchText}` : null;
  const {data, error} = useSWR(key, fetcher);
  const outLineShows = data?.map?.(({show}: {show: Show}) => ({...show}));
  return {
    searchResults: outLineShows || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSearch;
