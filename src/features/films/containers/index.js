import React from 'react';
import { SafeAreaView, ScrollView, FlatList, TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import Axios from 'axios';

import { FILMS, PEOPLE, BASE_URL_IMG, BASE_URL_IMG_PROF } from '~/api/constants';
import metrics from '~/api/metrics';
import { styles } from '../components/indexStyle';

function Home({ navigation }) {
  const [listFilm, setListFilm] = React.useState(null);
  const [listCharacter, setListCharacter] = React.useState(null);

  React.useEffect(() => {
    getListFilm();
    getListCharacter();
  }, []);

  const getListFilm = () => {
    Axios.get(FILMS.LIST).then((response) => {
      setListFilm(response.data.results);
    }).catch(err => {
      console.error(`GET LIST FILM: ${JSON.stringify(err.response)}`);
    });
  };

  const getListCharacter = () => {
    Axios.get(PEOPLE.LIST).then((response) => {
      setListCharacter(response.data.results);
    }).catch(err => {
      console.error(`GET LIST PEOPLE: ${JSON.stringify(err.response)}`);
    });
  };

  const CardFilm = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('FilmDetail', { id: item.episode_id })}>
        <View style={[styles.cardFilm, { marginRight: 10 }]}>
          <View style={styles.cardFilmImg}>
            <Image
              style={styles.cardImgCover}
              source={{ uri: `${BASE_URL_IMG}/300/200` }}
            />
          </View>
          <View style={styles.cardFilmLabel}>
            <Text ellipsizeMode="tail" numberOfLines={1}>{item.title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const CardCharacter = ({ item }) => {
    return (
      <View style={[styles.cardCharacter, { marginRight: 10 }]}>
        <View style={styles.cardCharacterImg}>
          <Image
            style={styles.cardImgCover}
            source={{ uri: `${BASE_URL_IMG_PROF}/300` }}
          />
        </View>
        <View style={styles.cardCharacterLabel}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontWeight: 'bold', fontSize: metrics.regularRS }}>{item.name}</Text>
          <Text>{item.gender != 'n/a' ? `${item.gender}, ` : null}{item.hair_color != 'n/a' ? `${item.hair_color}, ` : null}{item.skin_color} skin, {item.eye_color} eye color</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text ellipsizeMode="tail" numberOfLines={1}>{item.height} cm</Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={{ marginLeft: metrics.regularRS }}>{item.mass} kg</Text>
          </View>
        </View>
      </View>
    );
  };

  const ListFilm = () => (
    <>
      {listFilm &&
        <>
          <Text style={[styles.containerPadder, styles.headerText]}>Featured Films</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={metrics.getResponsiveSize(21)}
            snapToAlignment="center"
            contentContainerStyle={{ marginHorizontal: metrics.regularRS }}
          >
            {listFilm.map((item, i) => (
              <CardFilm key={i.toString()} item={item} />
            ))}
          </ScrollView>
        </>
      }

      <Text style={[styles.containerPadder, styles.headerText]}>Characters</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, i) => i.toString()}
        data={listCharacter}
        renderItem={({ item }) => <CardCharacter item={item} />}
        ListHeaderComponent={<ListFilm />}
      />
    </SafeAreaView>
  );
}

export default Home;
