import React, { createContext, useContext, useEffect, useState } from "react";
import * as Linking from "expo-linking";

type DeepLinkLoggerContextType = {
  scheme: string;
  hostname: string;
  path: string;
  queryParams: string;
}

const DeepLinkLoggerContext = createContext<DeepLinkLoggerContextType | undefined>(undefined);

export const DeepLinkLoggerProvider = ({children}: { children: React.ReactElement | React.ReactElement[] }) => {
  const [scheme, setScheme] = useState<string>("scheme");
  const [hostname, setHostname] = useState<string>("hostname");
  const [path, setPath] = useState<string>("path");
  const [queryParams, setQueryParams] = useState<string>("queryParams");
  const url = Linking.useURL();

  useEffect(() => {
    if (url) {
      const parsedUrl = Linking.parse(url);
      if (parsedUrl.scheme != null) setScheme(parsedUrl.scheme);
      if (parsedUrl.hostname != null) setHostname(parsedUrl.hostname);
      if (parsedUrl.path != null) setPath(parsedUrl.path);
      if (parsedUrl.queryParams != null) setQueryParams(JSON.stringify(parsedUrl.queryParams));
    }
  }, [url]);

  return (
    <DeepLinkLoggerContext.Provider value={{scheme, hostname, path, queryParams}}>
      {children}
    </DeepLinkLoggerContext.Provider>
  );
};

export const useDeepLinkLogger = () => {
  const context = useContext(DeepLinkLoggerContext);
  if (!context) {
    throw new Error("useDeepLinkLogger must be used within DeepLinkLoggerContextProvider");
  }
  return context;
};
