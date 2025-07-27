import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import ChildMemo from './ChildMemo';

const ParentWithMemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <ChildMemo onClick={handleClick} />
    </View>
  );
};

export default ParentWithMemo;
