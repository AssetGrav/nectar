import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class Start extends Component {
  render() {
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginVertical: '65%',
            alignItems: 'center',
          }}>
          <Image source={require('../image/logo.png')} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 5,
    backgroundColor: '#53B175',
    height: '100%',
    width: 'auto',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
