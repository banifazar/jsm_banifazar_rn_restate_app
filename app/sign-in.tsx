import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import { login } from "@/lib/appwrite";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
    return null;
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Image
          source={images.onboarding}
          className="h-4/6 w-full"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-center font-rubik text-base uppercase text-black-200">
            Welcome To Real Scout
          </Text>

          <Text className="mt-2 text-center font-rubik-bold text-3xl text-black-300">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="mt-12 text-center font-rubik text-lg text-black-200">
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="mt-5 w-full rounded-full bg-white py-4 shadow-md shadow-zinc-300"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="h-5 w-5"
                resizeMode="contain"
              />
              <Text className="ml-2 font-rubik-medium text-lg text-black-300">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
