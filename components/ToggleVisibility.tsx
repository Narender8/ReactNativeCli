import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ToggleVisibility: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Button
        title={visible ? 'Hide Details' : 'Show Details'}
        onPress={() => setVisible(!visible)}
      />
      {visible && <Text style={{ marginTop: 10 }}>This is the detailed description text.</Text>}
    </View>
  );
};

export default ToggleVisibility;
