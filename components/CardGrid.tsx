import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const cards = ['Card A', 'Card B', 'Card C', 'Card D'];

const CardGrid: React.FC = () => {
  return (
    <View style={styles.grid}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Text>{card}</Text>
        </View>
      ))}
    </View>
  );
};

export default CardGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  card: {
    width: '45%',
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
  },
});
