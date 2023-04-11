import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Offline = () => {
  const [connection, setConnection] = useState(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnection(state.isConnected || false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(insets);

  return (
    <>
      {!connection ? (
        <View style={[styles.offlineContainer, {top: insets.top}]}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      ) : null}
    </>
  );
};

export default Offline;
