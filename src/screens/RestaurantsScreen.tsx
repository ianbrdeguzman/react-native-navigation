import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RestaurantCard} from '../components/RestaurantCard';
import {RestaurantsStackParams} from '../stacks/restaurants';
import {Menu} from '../components/Menu';

type Props = NativeStackScreenProps<RestaurantsStackParams, 'Restaurants'>;

export function RestaurantsScreen({navigation}: Props) {
  const onPressHandler = (name: string) => {
    navigation.push('Restaurant', {name});
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurants</Text>
        <ScrollView>
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
        </ScrollView>
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
    marginTop: 8,
    fontWeight: 'bold',
  },
});
