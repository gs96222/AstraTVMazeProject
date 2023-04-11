import type {Cache} from 'swr';
import {mmkv} from '../services/mmkv';

const cacheProvider = (cache: Cache) => {
  const swrCache: Cache = {
    get: key => {
      const valueFromMap = cache.get(key);

      if (valueFromMap) {
        return valueFromMap;
      }

      if (typeof key === 'string' && mmkv.contains(key)) {
        const value = mmkv.getString(key);
        return value ? JSON.parse(value) : undefined;
      }

      return undefined;
    },
    set: (key, value) => {
      cache.set(key, value);

      if (typeof key === 'string') {
        mmkv.set(key, JSON.stringify(value));
      }
    },
    delete: key => {
      cache.delete(key);

      if (typeof key === 'string' && mmkv.contains(key)) {
        mmkv.delete(key);
      }
    },
    keys: function (): IterableIterator<string> {
      throw new Error('Function not implemented.');
    },
  };

  return swrCache;
};

export default cacheProvider;
