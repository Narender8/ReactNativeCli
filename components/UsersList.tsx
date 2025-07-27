import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

type User = {
  id: number;
  name: string;
};

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <FlatList
      data={users}
      keyExtractor={user => user.id.toString()}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default UsersList;
