import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@shopify/restyle';
import {Theme} from './theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({variant, label, onPress}) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.body;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.text;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
