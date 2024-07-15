const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import StaffDashboard from "./screens/StaffDashboard";
import ConnectBank from "./components/ConnectBank";
import CreateProfile from "./screens/CreateProfile";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import Item3 from "./components/Item3";
import BookingButton from "./components/BookingButton";
import BookingButton1 from "./components/BookingButton1";
import BookingButton2 from "./components/BookingButton2";
import Item5 from "./components/Item5";
import Item4 from "./components/Item4";
import AddTimeSlot from "./components/AddTimeSlot";
import Item7 from "./components/Item7";
import CONTENT from "./components/CONTENT";
import BookingButton3 from "./components/BookingButton3";
import CONTENT1 from "./components/CONTENT1";
import BookingButton4 from "./components/BookingButton4";
import CONTENT2 from "./components/CONTENT2";
import BookingButton5 from "./components/BookingButton5";
import Item6 from "./components/Item6";
import CreateProfile5 from "./screens/CreateProfile5";
import SignupPassword from "./screens/SignupPassword";
import TermsConditions from "./screens/TermsConditions";
import SignupFullname from "./screens/SignupFullname";
import SignupVeryfyEmail from "./screens/SignupVeryfyEmail";
import SignupOtp from "./screens/SignupOtp";
import SignupMoibleOtp from "./screens/SignupMoibleOtp";
import SignupMobile from "./screens/SignupMobile";
import ChooseRegistrationType from "./screens/ChooseRegistrationType";
import CreateProfile1 from "./screens/CreateProfile1";
import CreateProfile2 from "./screens/CreateProfile2";
import CreateProfile3 from "./screens/CreateProfile3";
import SubscriptionSuccessfull from "./screens/SubscriptionSuccessfull";
import SingleChat from "./screens/SingleChat";
import MyBookings2 from "./screens/MyBookings2";
import EstabilsmentRequest from "./screens/EstabilsmentRequest";
import ChatListing from "./screens/ChatListing";
import StablishmentReview from "./screens/StablishmentReview";
import MyAccount from "./screens/MyAccount";
import Establishment1 from "./screens/Establishment1";
import Profile from "./screens/Profile";
import Avaibility from "./screens/Avaibility";
import Feedback from "./screens/Feedback";
import Staff from "./screens/Staff";
import CreateProfile4 from "./screens/CreateProfile4";
import Establishment from "./screens/Establishment";
import MyBookings from "./screens/MyBookings";
import AllowLocation from "./screens/AllowLocation";
import LocationWhileUsing from "./components/LocationWhileUsing";
import StaffStartJob from "./screens/StaffStartJob";
import EnterCode from "./components/EnterCode";
import StaffComplateJob from "./screens/StaffComplateJob";
import MyBookings1 from "./screens/MyBookings1";
import Establishment3 from "./screens/Establishment3";
import Establishment2 from "./screens/Establishment2";
import Filter from "./screens/Filter";
import Property1Default5 from "./components/Property1Default5";
import Property1StaffCard from "./components/Property1StaffCard";
import Star from "./components/Star";
import Property1Default from "./components/Property1Default";
import Property1Workable from "./components/Property1Workable";
import Property1Default1 from "./components/Property1Default1";
import Time from "./components/Time";
import Property1Default2 from "./components/Property1Default2";
import SettingIcon from "./components/SettingIcon";
import Property1Variant7 from "./components/Property1Variant7";
import UploadFile from "./components/UploadFile";
import Property1Default4 from "./components/Property1Default4";
import StaffSplash from "./screens/StaffSplash";
import Item from "./components/Item";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <Item4 />,
    <Item6 />,
    <Item5 />,
    <Item7 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Item />,
    <Item1 />,
    <Item2 />,
    <Item3 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#7a77ff",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: 20,
              height: 87.7,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="StaffDashboard"
        component={StaffDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyBookings2"
        component={MyBookings2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ChatListing"
        component={ChatListing}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="EstabilsmentRequest"
        component={EstabilsmentRequest}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile"
                component={CreateProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddTimeSlot"
                component={AddTimeSlot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile5"
                component={CreateProfile5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupPassword"
                component={SignupPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TermsConditions"
                component={TermsConditions}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupFullname"
                component={SignupFullname}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupVeryfyEmail"
                component={SignupVeryfyEmail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupOtp"
                component={SignupOtp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupMoibleOtp"
                component={SignupMoibleOtp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupMobile"
                component={SignupMobile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChooseRegistrationType"
                component={ChooseRegistrationType}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile1"
                component={CreateProfile1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile2"
                component={CreateProfile2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile3"
                component={CreateProfile3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SubscriptionSuccessfull"
                component={SubscriptionSuccessfull}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SingleChat"
                component={SingleChat}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StablishmentReview"
                component={StablishmentReview}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyAccount"
                component={MyAccount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Establishment1"
                component={Establishment1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Avaibility"
                component={Avaibility}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Feedback"
                component={Feedback}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Staff"
                component={Staff}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateProfile4"
                component={CreateProfile4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Establishment"
                component={Establishment}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyBookings"
                component={MyBookings}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AllowLocation"
                component={AllowLocation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffStartJob"
                component={StaffStartJob}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffComplateJob"
                component={StaffComplateJob}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyBookings1"
                component={MyBookings1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Establishment3"
                component={Establishment3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Establishment2"
                component={Establishment2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Filter"
                component={Filter}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffSplash"
                component={StaffSplash}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <StaffSplash />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
