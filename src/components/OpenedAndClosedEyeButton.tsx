import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/src/constants/colors';
import { OpenedEye, ClosedEye } from '@/assets/svgs';

interface OpenedAndClosedEyeButtonProps {
  isPasswordVisible: boolean;
  handleChangePasswordVisibility: () => void;
}

const OpenedAndClosedEyeButton = ({ isPasswordVisible, handleChangePasswordVisibility }: OpenedAndClosedEyeButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={handleChangePasswordVisibility}>
      {
        isPasswordVisible ?
          <OpenedEye fill={colors.pcian} />
          :
          <ClosedEye fill={colors.pcian} />
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default OpenedAndClosedEyeButton;