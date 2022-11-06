import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens/ProfileScreen';
import {ExploreScreenStack} from './explore';
import {RestaurantsScreenStack} from './restaurants';

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: undefined;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

export const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootScreenStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} />
      <RootStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreenStack}
      />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  );
};
