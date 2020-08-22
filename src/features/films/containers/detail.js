import React from 'react';
import { SafeAreaView, ScrollView, TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import Axios from 'axios';

import { FILMS, PEOPLE, BASE_URL_IMG, BASE_URL_IMG_PROF } from '~/api/constants';
import metrics from '~/api/metrics';
import { convertDate } from '~/api/helpers';
import { styles } from '../components/indexStyle';

function FilmDetail({ route, navigation }) {
  const [film, setFilm] = React.useState(null);
  const [listCharacter, setListCharacter] = React.useState(null);

  React.useEffect(() => {
    getFilm(route.params.id);
    getListCharacter();
  }, []);

  const getFilm = id => {
    Axios.get(FILMS.DETAIL(id)).then((response) => {
      setFilm(response.data);
    }).catch(err => {
      console.error(`GET FILM: ${JSON.stringify(err.response)}`);
    });
  };

  const getListCharacter = () => {
    Axios.get(PEOPLE.LIST).then((response) => {
      setListCharacter(response.data.results);
    }).catch(err => {
      console.error(`GET LIST PEOPLE: ${JSON.stringify(err.response)}`);
    });
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
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.headTitle}>{item.name}</Text>
          <Text>{item.gender != 'n/a' ? `${item.gender}, ` : null}{item.hair_color != 'n/a' ? `${item.hair_color}, ` : null}{item.skin_color} skin, {item.eye_color} eye color</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text ellipsizeMode="tail" numberOfLines={1}>{item.height} cm</Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={{ marginLeft: metrics.regularRS }}>{item.mass} kg</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {film &&
        <ScrollView>
          <Image source={{ uri: `${BASE_URL_IMG}/500/400` }} style={{ height: metrics.getResponsiveSize(30) }} />
          <View style={{ position: 'absolute', flexDirection: 'row' }}>
            <View size={50} style={styles.headerBackBtn}>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Text style={{ fontSize: metrics.regularRS, color: 'white' }}>{'<  Back'}</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={{ fontFamily: 'Roboto', padding: metrics.regularRS }}>
            <Text style={[styles.headerText, { marginTop: metrics.extraSmallRS }]}>{film.title}</Text>
            <Text>{convertDate(film.release_date)}</Text>
            <Text>Producer : {film.producer}</Text>
            <Text>Director   : {film.director}</Text>

            <Text style={[styles.headerText, styles.header2Text]}>Synopsis</Text>
            <Text>{film.opening_crawl}</Text>
          </View>

          <Text style={[styles.containerPadder, styles.headerText]}>Characters</Text>
          {listCharacter &&
            listCharacter.map((item, i) => <CardCharacter key={i.toString()} item={item} />)
          }
        </ScrollView>
      }
    </SafeAreaView>
  );
}

export default FilmDetail;
