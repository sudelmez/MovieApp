/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Image } from 'react-native';
import AuthView from './pages/auth/auth_view';
import HomeView from './pages/home/home_view';
import RegisterView from './pages/register/register_view';
import ProfileView from './pages/profile/profile_view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeIcon from './res/images/home.png';
import profileIcon from './res/images/profile.png';
import colors from './constants/Colors.ts';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconImage;

          if (route.name === 'home') {
            iconImage = homeIcon;
          } else if (route.name === 'profile') {
            iconImage = profileIcon;
          }

          // eslint-disable-next-line react-native/no-inline-styles
          return <Image source={iconImage} style={{ width: 24, height: 24, tintColor: focused ? colors.commonColor.activeColor : colors.commonColor.deactiveColor }} />;
        }, headerShown: false, tabBarStyle: {
          backgroundColor: colors.light.bottomBarColor,
        },
      })}>
      <Tab.Screen name="home" component={HomeView} />
      <Tab.Screen name="profile" component={ProfileView} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth" component={AuthView} />
          <Stack.Screen name="register" component={RegisterView} />
          <Stack.Screen name="homeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
