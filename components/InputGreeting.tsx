import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputGreeting: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [submitted, setSubmitted] = useState<string>('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={() => setSubmitted(name)} />
      {submitted ? <Text>Hello, {submitted}!</Text> : null}
    </View>
  );
};

export default InputGreeting;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginVertical: 8,
    padding: 8,
  },
});
