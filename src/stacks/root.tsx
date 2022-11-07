import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '../screens/ProfileScreen';
import {ExploreScreenStack} from './explore';
import {RestaurantsScreenStack} from './restaurants';
import {ExploreIcon} from '../assets/icons/ExploreIcon';
import {RestaurantsIcon} from '../assets/icons/RestaurantsIcon';
import {ProfileIcon} from '../assets/icons/ProfileIcon';

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: undefined;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

export const RootStack = createBottomTabNavigator<RootStackParams>();

export const RootScreenStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <RootStack.Screen
        name="ExploreStack"
        component={ExploreScreenStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <ExploreIcon color={color} size={size} />
          ),
        }}
      />
      <RootStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreenStack}
        options={{
          tabBarLabel: 'Restaurants',
          tabBarIcon: ({color, size}) => (
            <RestaurantsIcon color={color} size={size} />
          ),
        }}
      />
      <RootStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <ProfileIcon color={color} size={size} />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};
