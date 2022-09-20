import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AppContextProviderType } from '../types/types';
import { JSONType } from '../types/types';

const appContextDefaultValue = {};

export const AppContext = createContext<AppContextProviderType>({
  isLoaded: false,
  appData: appContextDefaultValue,
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [appData, setAppData] = useState<JSONType>(appContextDefaultValue);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // const fetchAppElementsData = async () => {
    //   await axios
    //     .get(url, {
    //       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     })
    //     .then((res) => {
    //       setAppData(res.data);
    //       setIsLoaded(true);
    //     })
    //     .catch((err) => console.log(err));
    // };
    // fetchAppElementsData();
  }, []);

  return <AppContext.Provider value={{ isLoaded, appData }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
