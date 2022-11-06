import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  name: string;
  onPress: (name: string) => void;
}

export function RestaurantCard({name, onPress}: Props) {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginVertical: 4,
  },
});
