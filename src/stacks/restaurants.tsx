import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestaurantScreen} from '../screens/RestaurantScreen';
import {RestaurantsScreen} from '../screens/RestaurantsScreen';

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

export const RestaurantsScreenStack = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{headerShown: false}}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};
