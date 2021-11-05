import React from 'react';

const themes = {
  dark: {
    backgroundColor: 'black',
    backgroundCard: '#25282c',
    color: 'white',
  },

  light: {
    backgroundColor: 'white',
    backgroundCard: '#fff',
    color: 'black',
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

export const ThemeContext = React.createContext(initialState);

export const ThemeProvider = ({ children }: any) => {
  const [dark, setDark] = React.useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  const theme = !dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
