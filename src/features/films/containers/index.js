import React from 'react';
import { SafeAreaView, FlatList, TouchableWithoutFeedback, View, Text } from 'react-native';
import Axios from 'axios';

import { FILMS, PEOPLE, BASE_URL_IMG } from '~/api/constants';
import { styles } from '../components/indexStyle';

function Home({ navigation }) {
  const [listFilm, setListFilm] = React.useState(null);

  React.useEffect(() => {
    getListFilm();
  }, []);

  const getListFilm = () => {
    Axios.get(FILMS.LIST).then((response) => {
      setListFilm(response.data.results);
    }).catch(err => {
      console.error(`GET LIST FILM: ${JSON.stringify(err.response)}`);
    });
  };

  const cardFilm = item => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('FilmDetail', { id: item.episode_id })}>
        <View style={[styles.card, styles.margenner]}>
          <Text>{item.title}</Text>
          <Text>{item.release_date}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.episode_id.toString()}
        data={listFilm}
        horizontal={true}
        renderItem={({ item }) => cardFilm(item)}
      />
    </SafeAreaView>
  );
}

export default Home;
