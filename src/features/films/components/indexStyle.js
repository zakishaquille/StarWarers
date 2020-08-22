import { StyleSheet } from 'react-native';
import metrics from '~/api/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  margenner: {
    marginLeft: 15,
  },
  card: {
    fontFamily: 'Roboto',
    borderRadius: metrics.borderRadius,
    paddingHorizontal: metrics.smallRS,
    paddingVertical: metrics.extraSmallRS,
    backgroundColor: 'red',
  },
});

export { styles };
