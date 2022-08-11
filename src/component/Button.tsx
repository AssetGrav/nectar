import React from 'react';
import { Text, Pressable } from 'react-native';

export default function Button(props: any) {
  const { onPress, title, style, textStyle } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
