import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from '../../components';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});

interface SlideProps {
  label: string;
  right?: boolean;
}
const Slide: React.FC<SlideProps> = ({label, right}) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
