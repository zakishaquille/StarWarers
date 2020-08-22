import { StyleSheet } from 'react-native';
import metrics from '~/api/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerPadder: {
    marginHorizontal: metrics.regularRS,
    marginTop: metrics.smallRS,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: metrics.getResponsiveSize(2.2),
    color: '#333',
    marginBottom: metrics.extraSmallRS,
  },
  header2Text: {
    marginTop: metrics.extraSmallRS,
    fontSize: metrics.regularRS,
  },
  headTitle: {
    fontWeight: 'bold',
    fontSize: metrics.regularRS,
  },
  headerBackBtn: {
    left: metrics.regularRS,
    top: metrics.smallRS,
  },
  cardFilm: {
    height: metrics.getResponsiveSize(15),
    width: metrics.getResponsiveSize(20),
    borderRadius: metrics.borderRadius,
    backgroundColor: '#F6F8FA',
  },
  cardFilmImg: {
    flex: 2,
  },
  cardFilmLabel: {
    fontFamily: 'Roboto',
    color: '#333',
    flex: 0.5,
    paddingHorizontal: metrics.smallRS,
    paddingVertical: metrics.extraSmallRS,
  },
  cardCharacter: {
    flexDirection: 'row',
    height: metrics.getResponsiveSize(15),
    marginHorizontal: metrics.regularRS,
    marginBottom: metrics.smallRS,
    borderRadius: metrics.borderRadius,
    backgroundColor: '#F6F8FA',
  },
  cardCharacterImg: {
    flex: 0.5,
    borderRadius: metrics.borderRadius,
  },
  cardCharacterLabel: {
    fontFamily: 'Roboto',
    color: '#333',
    flex: 1,
    justifyContent: 'space-between',
    padding: metrics.smallRS,
  },
  cardImgCover: {
    flex: 1,
    borderRadius: metrics.borderRadius,
  },
});

export { styles };
