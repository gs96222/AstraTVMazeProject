import fetcher from '../utils/fetcher';
import useSWRInfinite from 'swr/infinite';
import {UseShowsResponse} from '../types/responseTypes';
import {Show} from '../types/interfaces';

const useShows = (): UseShowsResponse => {
  // Return null if there are no more pages to fetch
  const getShowsPageKey = (pageIndex: number, previousPageData: Show[]) => {
    if (previousPageData && !previousPageData.length) {
      return null;
    }
    return `/shows?page=${pageIndex}`;
  };

  const {data, error, size, setSize, isValidating} = useSWRInfinite(
    getShowsPageKey,
    fetcher,
    {initialSize: 1},
  );

  return {
    showsPages: data || [],
    currentPages: size,
    setPages: setSize,
    isLoading: isValidating,
    isError: error,
  };
};

export default useShows;
