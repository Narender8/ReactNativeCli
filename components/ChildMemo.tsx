import React from 'react';
import { View, Button } from 'react-native';

type Props = {
  onClick: () => void;
};

const ChildMemo: React.FC<Props> = React.memo(({ onClick }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Button title="Child Button" onPress={onClick} />
    </View>
  );
});

export default ChildMemo;
