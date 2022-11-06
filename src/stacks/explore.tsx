import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExploreScreen} from '../screens/ExploreScreen';
import {RestaurantScreen} from '../screens/RestaurantScreen';

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

export const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};
