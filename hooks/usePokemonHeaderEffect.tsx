import { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PokemonDetail } from "@/types/pokemon";
import { getColorIsLight } from "@/utils/getColorIsLight";

export const usePokemonHeaderOptions = (
  data: PokemonDetail | null,
  isLoading: boolean,
  hasError: boolean,
) => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    if (isLoading || hasError || !data) {
      navigation.setOptions({headerShown: false});
    } else {
      const firstColor = data.types[0].color ?? "fff";
      const contentColor = getColorIsLight(firstColor) ? "black" : "white";
      navigation.setOptions({
        headerShown: true,
        title: `ポケモン図鑑 #${data?.index ?? -1}`,
        headerStyle: {
          backgroundColor: `#${firstColor}`,
        },
        headerTintColor: contentColor,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.dismiss()}
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <AntDesign name="left" size={20} color={contentColor}/>
          </TouchableOpacity>
        ),
      });
    }
  }, [data, isLoading, hasError, navigation]);
};
