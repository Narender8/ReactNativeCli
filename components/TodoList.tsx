import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoList: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  item: {
    paddingVertical: 4,
  },
});
