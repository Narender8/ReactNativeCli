import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text>Elapsed Time: {seconds} seconds</Text>
    </View>
  );
};

export default Timer;
