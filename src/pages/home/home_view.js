/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, FlatList ,Text} from 'react-native';
import styles from './home_view.style';
import movieData from './default_movies';
import MovieCard from '../../component/movie_card/movie_card';


function HomeView() {
  const renderItem = ({ item }) => {
    console.log(item);
    return <MovieCard url={item.image} name={item.name} />;
  };
  return <SafeAreaView style={styles.container}>
    <Text style={styles.headline}>What Is New..</Text>
    <FlatList
      data={movieData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  </SafeAreaView>;
}

export default HomeView;
