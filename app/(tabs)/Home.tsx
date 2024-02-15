import { FlatList, StyleSheet, View, Text } from 'react-native';
import categories from '@/assets/data/categories';

export default function HomeScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
