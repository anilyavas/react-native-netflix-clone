import { Text, FlatList, StyleSheet, Image, View } from 'react-native';

type HomeCategoryProps = {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
};
const HomeCategory = ({ category }: HomeCategoryProps) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
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
