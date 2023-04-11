# AstraTVMazeProject
A React Native app to display TV information retrieved by the TVMaze API.

## Installation

Requirements

[React Native Cli Enviroment](https://reactnative.dev/docs/environment-setup)


npm was used for package management

**Install dependencies**

```
npm ci
```

**Install IOS Pods**

```
cd ios && pod install
```

**Run IOS**

```
npm run ios
```

**Run Android**

```
npm run android
```

## Main dependencies used

React Navigation -- To manage general app navigation

Axios -- To manage Api calls

Redux -- State management lib

SWR - TO fetch the data and persist state.

mmkv - used with swr to persist the data calls. since its a synchronous persistance state

React Native Vector Icons -  Icons

react native async storage  - persistance state with redux-persist, can be migrated to use with mmkv

react-native-render-html - to render the html content from the api.


##  Improvements

Some of the things that can be improved if there is more time and can be added are :-

- Error handling component and altogether a better error handling in the app.
- Making offline component more robust, since it currently doesn't work very well with the ios (downgraded the netinfo plugin to 6)
- Added a better layout and screens to handle episodes screen and a different navigation for search, favorites and home
-  adding Unit test and integration test cases.
- Added a config from the persistance of SWR with mmkv plugin. A better configuration is required.
- Same goes with the redux-persist configuration to be added with mmkv.
- Better config for the virtualization of the shows list. It can get more optimized.
- 404 screen.
