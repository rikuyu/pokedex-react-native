import { useCallback, useEffect, useMemo } from "react";
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

  const firstColor = data?.types[0].color ?? "fff";
  const contentColor = useMemo(() => getColorIsLight(firstColor) ? "black" : "white", [firstColor]);

  const headerLeft = useCallback(() => (
    <TouchableOpacity
      onPress={() => router.dismiss()}
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
      }}
    >
      <AntDesign name="left" size={20} color={contentColor} />
    </TouchableOpacity>
  ), [router, contentColor]);

  useEffect(() => {
    if (isLoading || hasError || !data) {
      navigation.setOptions({
        headerShown: true,
        title: "",
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "transparent",
      });
    } else {
      navigation.setOptions({
        headerShown: true,
        title: `ポケモン図鑑 #${data?.index ?? -1}`,
        headerStyle: {
          backgroundColor: `#${firstColor}`,
        },
        headerTintColor: contentColor,
        headerLeft: headerLeft,
      });
    }
  }, [data, isLoading, hasError, firstColor, contentColor, headerLeft, navigation]);
};
