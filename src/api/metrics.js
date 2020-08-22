import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const percentageCalculation = (max, val) => max * (val / 100);

const getResponsiveSize = val => {
  const percentageDesired = parseFloat(val);
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    ),
    percentageDesired
  );
};

export default {
  borderRadius: getResponsiveSize(1),

  extraSmallRS: getResponsiveSize(1),
  smallRS: getResponsiveSize(1.5),
  regularRS: getResponsiveSize(2),
  largeRS: getResponsiveSize(2.5),
  extraLargeRS: getResponsiveSize(3),

  getResponsiveSize,

  width,
  height,
};
