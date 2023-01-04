import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  labelValue,
  label,
  icon,
  inputType,
  keyboardType,
  ...rest
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          value={labelValue}
          placeholder={label}
          keyboardType={keyboardType}
          numberOfLines={1}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          placeholderTextColor='#666'
          {...rest}
        />
      ) : (
        <TextInput
          value={labelValue}
          placeholder={label}
          keyboardType={keyboardType}
          numberOfLines={1}
          style={{flex: 1, paddingVertical: 0}}
          placeholderTextColor='#666'
          {...rest}
        />
      )}
    </View>
  );
}
