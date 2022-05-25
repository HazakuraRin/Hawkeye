import React from 'react';
import {LayoutChangeEvent, View, ViewStyle} from 'react-native';

export type SpacingProps = {
  size: number;
  vertical?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
  styles?: ViewStyle;
};

export const Spacing: React.FC<SpacingProps> = ({size, vertical, onLayout, styles}) => (
  <View style={[vertical ? {height: size} : {width: size}, styles]} onLayout={onLayout} />
);
