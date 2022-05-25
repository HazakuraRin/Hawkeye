import React from 'react';
import {LayoutChangeEvent, SafeAreaView, StyleProp, StyleSheet} from 'react-native';
import R from '../resources/R';

interface ContainerProps {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: R.colors.white},
});

export const Container = ({style, children, onLayout}: ContainerProps) => {
  return (
    <SafeAreaView style={[styles.container, style]} onLayout={onLayout}>
      {children}
    </SafeAreaView>
  );
};
