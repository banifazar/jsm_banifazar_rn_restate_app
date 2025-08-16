import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="mt-5 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="ml-2 flex flex-col items-start justify-center">
              <Text className="font-rubik text-xs text-black-100">
                Good Morning
              </Text>
              <Text className="font-rubik-medium text-base text-black-300">
                Bani
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-rubik-bold text-xl text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="font-rubik-bold text-base text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-5 flex flex-row gap-5">
            <FeaturedCard />
            <FeaturedCard />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="font-rubik-bold text-xl text-black-300">
            Our Recommendation
          </Text>
          <TouchableOpacity>
            <Text className="font-rubik-bold text-base text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <Filters />

        <View className="mt-5 flex flex-row gap-5">
          <Card />
          <Card />
        </View>
      </View>
    </SafeAreaView>
  );
}
