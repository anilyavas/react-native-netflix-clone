import { FlatList, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import categories from '@/assets/data/categories';

const firstCategory = categories.items[0];
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{firstCategory.title}</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  image: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5,
  },
});
