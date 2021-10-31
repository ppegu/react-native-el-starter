import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

export const AuthContext = React.createContext({
  token: '',
  setToken: (newToken: any) => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState<any>(null);

  useEffect(() => {
    const getLocalToken = async () => {
      const localToken = await AsyncStorage.getItem('authToken');
      setToken(localToken);
    };
    getLocalToken();
  }, []);

  useEffect(() => {
    const setLocalToken = async () => {
      await AsyncStorage.setItem('authToken', token);
    };
    setLocalToken();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
