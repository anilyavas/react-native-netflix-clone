import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import HomeCategory from '@/components/HomeCategory';
import categories from '@/assets/data/categories';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
