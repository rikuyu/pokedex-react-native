import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MyPageHeader from "@/components/MyPageHeader";
import EditButtonSection from "@/components/EditButtonSection";
import BiographySection from "@/components/BiographySection";
import Residence from "@/components/Residence";
import Birthday from "@/components/Birthday";
import BerryItem from "@/components/BerryItem";
import { BerryData } from "@/types/berry";
import { Profile } from "@/services/profileStorage";
import { useMyPageData } from "@/hooks/useMyPageData";
import { View, YStack } from "tamagui";
import FullScreenLoadingIndicator from "@/components/FullScreenLoadingIndicator";
import FullScreenErrorView from "@/components/FullScreenErrorView";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<BerryData>);

export default function MyPage() {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      "worklet";
      scrollY.value = event.contentOffset.y;
    },
  });

  const {width} = useWindowDimensions();
  const imageSize = width / 5;

  const {profile, berryList, isLoading, isError} = useMyPageData();

  if (isLoading) {
    return <FullScreenLoadingIndicator/>;
  }

  if (isError) {
    return <FullScreenErrorView/>;
  }

  return (
    <YStack f={1} ac={"center"} jc={"center"} bg={"$background"}>
      <MyPageHeader
        imageSize={imageSize}
        scrollOffset={scrollY}
        positionStyle={{zIndex: 2}}
      />
      <AnimatedFlatList
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ListHeaderComponent={<ProfileSection profile={profile} imageSize={imageSize}/>}
        ItemSeparatorComponent={() => <View f={1} h={1} bg={"$color"}/>}
        data={berryList}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <BerryItem berry={item}/>}
        style={{zIndex: 1}}
      />
    </YStack>
  );
};

const ProfileSection = React.memo(({imageSize, profile}: { imageSize: number; profile: Profile; }) => {
  const router = useRouter();

  return (
    <>
      <EditButtonSection onPress={() => router.push("/edit")} height={imageSize / 2}/>
      <BiographySection profile={profile}/>
      <Residence/>
      <View h={8}/>
      <Birthday/>
      <View h={16}/>
      <View f={1} h={1} bg={"$color"}/>
    </>
  );
});
