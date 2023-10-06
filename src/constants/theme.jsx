import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    gradientForm: '#A376F1',
    nprimary: '#7d5fff',
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
    dark: '#444',
    bgColor: '#82ccdd',
    warning: '#f0d500',
    danger: '#FF0D0E',
    gray: '#83829A',
    gray2: "#C1C0C8",
    grayLight: '#ccc',
    black: '#0a0a0a',
    textBg: '#E3E3E3',
    primary: "#312651",
    secondary: "#444262",
    tertiary: "#FF7754",

};
export const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold"
}

export const SIZES = {
    xSmall:10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32, 
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}

export const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };