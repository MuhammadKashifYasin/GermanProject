import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Alphabet from "../screens/Alphabet";
import Numbers from "../screens/Number";
import Colors from "../screens/colors";
import FastFood from "../screens/FastFood";
import Vegetables from "../screens/Vegetables";
import Fruits from "../screens/Fruits";
import DrinksAndDesserts from "../screens/DrinksAndDesserts";
import Transport from "../screens/Transport";
import Verbs from "../screens/verbs";
import Body from "../screens/body";
import WildAnimals from "../screens/wildAnimals";
import FarmAnimals from "../screens/farmAnimals";
import SeaAnimals from "../screens/seaAnimals";
import Pets from "../screens/pets";
import Insects from "../screens/insects";
import WeekDays from "../screens/weekDays";
import MonthAndSeasons from "../screens/monthAndSeason";
import Clothing from "../screens/clothing";
import School from "../screens/school";
import Music from "../screens/music";
import Weather from "../screens/weather";
import Cities from "../screens/city";
import LivingRoom from "../screens/livingRoom";
import BedRoom from "../screens/bedroom";
import BathRoom from "../screens/bathRoom";
import Kitchen from "../screens/kichen";
import Holidays from "../screens/holidays";
import Sports from "../screens/sports";
import NaturalLandScapes from "../screens/naturalLandScapes";
import ToForm from "../screens/toForm";
import Opposites from "../screens/opposites";
import Technology from "../screens/technology";
import ElectricAppliances from "../screens/electricalAppliances";
import SpaceTravel from "../screens/spaceTravel";
import Christmas from "../screens/christmas";
import Halloween from "../screens/halloween";
import Dashboared from "../screens/Dashboared";
import Start from "../screens/start";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="start"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="start" component={Start} />
      <Stack.Screen name="dashboared" component={Dashboared} />
      <Stack.Screen name="alphabet" component={Alphabet} />
      <Stack.Screen name="number" component={Numbers} />
      <Stack.Screen name="color" component={Colors} />
      <Stack.Screen name="food" component={FastFood} />
      <Stack.Screen name="vegetable" component={Vegetables} />
      <Stack.Screen name="fruit" component={Fruits} />
      <Stack.Screen name="drinks" component={DrinksAndDesserts} />
      <Stack.Screen name="transport" component={Transport} />
      <Stack.Screen name="verbs" component={Verbs} />
      <Stack.Screen name="body" component={Body} />
      <Stack.Screen name="wild" component={WildAnimals} />
      <Stack.Screen name="farm" component={FarmAnimals} />
      <Stack.Screen name="sea" component={SeaAnimals} />
      <Stack.Screen name="pets" component={Pets} />
      <Stack.Screen name="insects" component={Insects} />
      <Stack.Screen name="week" component={WeekDays} />
      <Stack.Screen name="month" component={MonthAndSeasons} />
      <Stack.Screen name="clothing" component={Clothing} />
      <Stack.Screen name="school" component={School} />
      <Stack.Screen name="music" component={Music} />
      <Stack.Screen name="weather" component={Weather} />
      <Stack.Screen name="city" component={Cities} />
      <Stack.Screen name="living" component={LivingRoom} />
      <Stack.Screen name="bed" component={BedRoom} />
      <Stack.Screen name="bath" component={BathRoom} />
      <Stack.Screen name="kitchen" component={Kitchen} />
      <Stack.Screen name="holiday" component={Holidays} />
      <Stack.Screen name="sport" component={Sports} />
      <Stack.Screen name="nature" component={NaturalLandScapes} />
      <Stack.Screen name="tofarm" component={ToForm} />
      <Stack.Screen name="opposite" component={Opposites} />
      <Stack.Screen name="technology" component={Technology} />
      <Stack.Screen name="electrical" component={ElectricAppliances} />
      <Stack.Screen name="space" component={SpaceTravel} />
      <Stack.Screen name="christmas" component={Christmas} />
      <Stack.Screen name="halloween" component={Halloween} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
