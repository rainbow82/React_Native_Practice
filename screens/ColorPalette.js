import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item, index) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
