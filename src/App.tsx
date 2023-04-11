import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppNavigator from './navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SWRConfig} from 'swr';
import cacheProvider from './utils/swrCacheProviderConfig';
import Offline from './components/Offline';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SWRConfig value={{provider: cacheProvider}}>
          <SafeAreaProvider>
            <View style={styles.root}>
              <Offline />
              <AppNavigator />
            </View>
          </SafeAreaProvider>
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.63)',
    flex: 1,
  },
});

export default App;
