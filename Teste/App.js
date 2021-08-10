import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <View style={styles.div}>
      <StatusBar />
      <Text style={styles.h1}>Texto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
  },
  div: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
