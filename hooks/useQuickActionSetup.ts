import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { i18nText } from "@/utils/i18n";
import { RouterAction, useQuickActionRouting } from "expo-quick-actions/router";
import { useQuickActionCallback } from "expo-quick-actions/hooks";
import { isIos } from "@/utils/platform";

export const useQuickActionSetup = () => {
  useQuickActionCallback((action) => {
    console.log("Action:", `id[${action.title}] tapped`);
  });

  useQuickActionRouting();

  useEffect(() => {
    void QuickActions.setItems<RouterAction>([
      {
        id: "0",
        title: i18nText("quickActionSearchTitle"),
        subtitle: i18nText("quickActionSearchSubTitle"),
        icon: isIos ? "symbol:magnifyingglass" : "search_icon",
        params: {href: "/pokemon/252"},
      },
      {
        id: "1",
        title: i18nText("quickActionProfileTitle"),
        subtitle: i18nText("quickActionProfileSubTitle"),
        icon: isIos ? "symbol:person" : "mypage_icon",
        params: {href: "/mypage"},
      },
    ]);
  }, []);
};
