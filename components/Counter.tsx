import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="−" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  count: { fontSize: 32, marginVertical: 10 },
  buttons: { flexDirection: 'row', gap: 10 },
});
