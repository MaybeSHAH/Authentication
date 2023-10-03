import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    gradientForm: '#A376F1',
    primary: '#7d5fff',
    white: '#FFFFFF',
    dark: '#444',
    bgColor: '#82ccdd',
    warning: '#f0d500',
    danger: '#FF0D0E',
    gray: '#666666',
    grayLight: '#ccc',
    black: '#0a0a0a',
    textBg: '#E3E3E3'
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}