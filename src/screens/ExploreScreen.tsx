import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Menu} from '../components/Menu';
import {RestaurantCard} from '../components/RestaurantCard';
import {ExploreStackParams} from '../stacks/explore';

type Props = NativeStackScreenProps<ExploreStackParams, 'Explore'>;

export function ExploreScreen({route, navigation}: Props) {
  const onPressHandler = (name: string) => {
    navigation.push('Restaurant', {name});
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Explore</Text>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Sushi Restaurant"
          onPress={() => onPressHandler('Sushi Restaurant')}
        />
        <RestaurantCard
          name="Burger Restaurant"
          onPress={() => onPressHandler('Burger Restaurant')}
        />
        <RestaurantCard
          name="Pizza Restaurant"
          onPress={() => onPressHandler('Pizza Restaurant')}
        />
        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="Sushi Restaurant"
          onPress={() => onPressHandler('Sushi Restaurant')}
        />
        <RestaurantCard
          name="Burger Restaurant"
          onPress={() => onPressHandler('Burger Restaurant')}
        />
        <RestaurantCard
          name="Pizza Restaurant"
          onPress={() => onPressHandler('Pizza Restaurant')}
        />
      </View>
      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
