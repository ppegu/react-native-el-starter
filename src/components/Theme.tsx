 import * as React from 'react';
 import {
     Text as DefaultText,
     View as DefaultView,
 } from 'react-native';
 import TextTickerDefault from 'react-native-text-ticker';
 import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
 import { default as FeatherIcon } from 'react-native-vector-icons/Feather';
 import { default as MaterialIconDefault } from 'react-native-vector-icons/MaterialCommunityIcons';
 import Colors from 'src/constants/Colors';
 
 import useColorScheme from 'src/hooks/useColorScheme';
 

 import {
     Tab as ElTab,
     TabItemProps,
     Icon,
     IconProps,
     Input as DefaultInput,
     InputProps,
     TabProps,
 } from 'react-native-elements';
 import { TouchableOpacity } from 'react-native-gesture-handler';
 
 export function useThemeColor(
     props: { light?: string; dark?: string },
     colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
 ) {
     const theme = useColorScheme();
 
     const colorFromProps = props[theme];
 
     if (colorFromProps) {
         return colorFromProps;
     } else {
         return Colors[theme][colorName];
     }
 }
 
 type ThemeProps = {
     lightColor?: string;
     darkColor?: string;
 };
 
 export type TextProps = ThemeProps & DefaultText['props'];
 export type TextTickerProps = ThemeProps & TextTickerDefault['props'];
 export type ViewProps = ThemeProps & DefaultView['props'];
 export type FontawesomeProps = ThemeProps & FontAwesome5Icon['props'];
 export type FeatherProps = ThemeProps & FeatherIcon['props'];
 export type MaterialIconProps = ThemeProps & MaterialIconDefault['props'];
 
 export const Text = (props: TextProps) => {
     const { style, lightColor, darkColor, ...otherProps } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
 
     return <DefaultText style={[{ color }, style]} {...otherProps} />;
 };
 
 export const View = (props: ViewProps) => {
     const { style, lightColor, darkColor, ...otherProps } = props;
     const backgroundColor = useThemeColor(
         { light: lightColor, dark: darkColor },
         'background',
     );
 
     return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
 };
 
 export const TransparentView = (props: ViewProps) => {
     const { style, lightColor, darkColor, ...otherProps } = props;
 
     return (
         <DefaultView
             style={[{ backgroundColor: 'transparent' }, style]}
             {...otherProps}
         />
     );
 };
 
 export const Fontawesome = (props: FontawesomeProps) => {
     const { name, size, lightColor, darkColor, ...rest } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
 
     return <FontAwesome5Icon name={name} size={size} color={color} {...rest} />;
 };
 
 export const Feather = (props: FeatherProps) => {
     const { name, size, lightColor, darkColor, ...rest } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
 
     return <FeatherIcon name={name} size={size} color={color} {...rest} />;
 };
 
 export const MaterialIcon = (props: MaterialIconProps) => {
     const { name, size, lightColor, darkColor, ...rest } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
 
     return (
         <MaterialIconDefault name={name} size={size} color={color} {...rest} />
     );
 };
 
 export const TextTicker = (props: TextTickerProps) => {
     const { style, lightColor, darkColor, ...otherProps } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
 
     return <TextTickerDefault style={[{ color }, style]} {...otherProps} />;
 };
 
 export type ElIconProps = ThemeProps & IconProps;
 
 export const ElIcon = (props: ElIconProps) => {
     const { lightColor, darkColor, ...rest } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
 
     return <Icon color={color} {...rest} tvParallaxProperties />;
 };
 
 export type TouchableElIconProps = ThemeProps &
     IconProps &
     TouchableOpacity['props'];
 
 export const TouchableElIcon = (props: TouchableElIconProps) => {
     const { lightColor, darkColor, ...rest } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'icon');
 
     return (
         <TouchableOpacity {...rest}>
             <Icon color={color} {...rest} tvParallaxProperties/>
         </TouchableOpacity>
     );
 };
 
 export type ElInputProps = ThemeProps & InputProps;
 
 export const Input = (props: ElInputProps) => {
     const {
         lightColor,
         darkColor,
         labelStyle,
         inputStyle,
         inputContainerStyle,
         ...rest
     } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
     const backgroundColor = useThemeColor(
         { light: lightColor, dark: darkColor },
         'inputBackground',
     );
 
     return (
         <DefaultInput
             labelStyle={[{ color }, labelStyle]}
             inputStyle={[{ color }, inputStyle]}
             inputContainerStyle={[{ backgroundColor }, inputContainerStyle]}
             {...rest}
         />
     );
 };
 
 export const TabItem = (
     props: TabItemProps & ThemeProps & { height?: number },
 ) => {
     const {
         lightColor,
         darkColor,
         containerStyle,
         titleStyle,
         height,
         ...rest
     }: any = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
     const backgroundColor = useThemeColor(
         { light: lightColor, dark: darkColor },
         'background',
     );
 
     return (
         <ElTab.Item
             titleStyle={[{ color }, titleStyle]}
             containerStyle={[
                 { backgroundColor, borderBottomWidth: 0.5, height },
                 containerStyle,
             ]}
             {...rest}
         />
     );
 };
 
 export const Tab = (props: TabProps & ThemeProps & { children: Element[] }) => {
     const { lightColor, darkColor, indicatorStyle, ...rest } = props;
     const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
 
     return (
         <ElTab
             indicatorStyle={[{ backgroundColor: color }, indicatorStyle]}
             {...rest}
         />
     );
 };
 