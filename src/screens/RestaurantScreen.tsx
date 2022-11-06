import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RestaurantCard} from '../components/RestaurantCard';
import {ExploreStackParams} from '../stacks/explore';

type Props = NativeStackScreenProps<ExploreStackParams, 'Restaurant'>;

export function RestaurantScreen({route, navigation}: Props) {
  const onPressHandler = (name: string) => {
    navigation.push('Restaurant', {name});
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurant</Text>
        <Text>{route.params.name}</Text>
        <Text style={styles.sectionTitle}>Related Restaurants</Text>
        <RestaurantCard
          name={`${route.params.name} 1`}
          onPress={() => onPressHandler(`${route.params.name} 1`)}
        />
        <RestaurantCard
          name={`${route.params.name} 2`}
          onPress={() => onPressHandler(`${route.params.name} 2`)}
        />
        <RestaurantCard
          name={`${route.params.name} 3`}
          onPress={() => onPressHandler(`${route.params.name} 3`)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
