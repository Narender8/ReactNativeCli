import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Counter from '../components/Counter';
import GreetingCard from '../components/GreetingCard';
import ToggleVisibility from '../components/ToggleVisibility';
import Timer from '../components/Timer';
import InputGreeting from '../components/InputGreeting';
import TodoList from '../components/TodoList';
import CardGrid from '../components/CardGrid';
import ParentWithMemo from '../components/ParentWithMemo';
import UsersList from '../components/UsersList';
import DarkModeToggle from '../components/DarkModeToggle';

const Assignment: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>React Native Assignment Project</Text>

        <Section title="1. Counter">
          <Counter />
        </Section>

        <Section title="2. Greeting Cards">
          <GreetingCard name="Alice" message="Welcome to the app!" />
          <GreetingCard name="Bob" message="React Native is fun!" />
          <GreetingCard name="Charlie" message="Keep learning!" />
        </Section>

        <Section title="3. Toggle Visibility">
          <ToggleVisibility />
        </Section>

        <Section title="4. Timer">
          <Timer />
        </Section>

        <Section title="5. Input Greeting">
          <InputGreeting />
        </Section>

        <Section title="6. Todo List">
          <TodoList />
        </Section>

        <Section title="7. Card Grid">
          <CardGrid />
        </Section>

        <Section title="8. Memoized Component">
          <ParentWithMemo />
        </Section>

        <Section title="9. Users List (useFetch)">
          <UsersList />
        </Section>

        <Section title="10. Dark Mode Toggle">
          <DarkModeToggle />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Assignment;

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
