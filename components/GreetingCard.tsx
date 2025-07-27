import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  message: string;
};

const GreetingCard: React.FC<Props> = ({ name, message }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default GreetingCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
