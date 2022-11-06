import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../stacks/root';

export function Menu() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ExploreStack')}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RestaurantsStack')}>
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginVertical: 4,
  },
  title: {
    fontSize: 20,
  },
  link: {
    fontSize: 16,
    marginVertical: 2,
    color: '#097ade',
    fontWeight: 'bold',
  },
});
