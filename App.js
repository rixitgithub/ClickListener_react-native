import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export function CustomIcon1() {
  return (
    <Svg width={24} height={24} viewBox="0 0 512 512">
      <Path
        d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
        fill="#ffffff"
      />
    </Svg>
  );
}

export function CustomIcon2() {
  return (
    <Svg width={24} height={24} viewBox="0 0 448 512">
      <Path
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0-32-14.3-32-32s14.3-32 32-32H256V80z"
        fill="#ffffff"
      />
    </Svg>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [addButtonPressed, setAddButtonPressed] = useState(false);
  const [resetButtonPressed, setResetButtonPressed] = useState(false);

  const handleAddIn = () => {
    setAddButtonPressed(true);
  };

  const handleAddOut = () => {
    setAddButtonPressed(false);
    setCount(count + 1);
  };

  const handleResetIn = () => {
    setResetButtonPressed(true);
  };

  const handleResetOut = () => {
    setResetButtonPressed(false);
    setCount(0);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#e0d4c9' }]}>
      <View style={styles.contentContainer}>
        <Text style={[styles.counterText, { color: '#c9924f', fontSize: 300 }]}>{count}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleResetOut}
            onPressIn={handleResetIn}
            style={[
              styles.resetButton,
              {
                backgroundColor: resetButtonPressed ? '#a5916c' : '#222224',
              },
            ]}
          >
            <CustomIcon1 />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAddOut}
            onPressIn={handleAddIn}
            style={[
              styles.addButton,
              {
                backgroundColor: addButtonPressed ? '#a5916c' : '#222224',
              },
            ]}
          >
            <CustomIcon2 />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d4c9',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  addButton: {
    width: '15%',
    aspectRatio: 1,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    width: '15%',
    aspectRatio: 1,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
