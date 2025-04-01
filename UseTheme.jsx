

'use client';

import { useTheme } from "@emotion/react";


export const UseTheme = () => {
    const theme = useTheme();

    let primaryText = theme.palette.text.primary;
    let secondaryText = theme.palette.text.secondary;
    let primary = theme.palette.primary.main
    let secondary = theme.palette.secondary.main;
    let error = theme.palette.error.main;
    let black = theme.palette.customColors['black'];
    let offWhite = theme.palette.customColors['offWhite'];
    let lightBlack = theme.palette.customColors['lightBlack'];
    let yellow = theme.palette.customColors['yellow'];
    let blue = theme.palette.customColors['blue'];
    let deepPink = theme.palette.customColors['deepPink'];
    let deepNavy = theme.palette.customColors['deepNavy'];
    let goldenYellow = theme.palette.customColors['goldenYellow'];
    let red = theme.palette.customColors['red'];
    let background = theme.palette.background.default;
    let componentBg = theme.palette.background.componentBg;

    return { primaryText, secondaryText, primary, secondary, error, black, deepNavy, goldenYellow, red, background, lightBlack, offWhite, componentBg, yellow, blue, deepPink }
}