import { Element } from "../types/models/element";

export function setColorPalette(element: Element) {
    switch (element) {
        case Element.Pyro:
            setColors({
                primaryDark: '#520f07',
                primaryLight: '#c78844',
                secondaryDark: '#873a31',
                secondaryLight: '#bf6d63',
                borderDark: '#520f07',
                borderLight: '#ffffff',
                textDark: '#777777',
                textLight: '#ffffff',
            });
            break;
        default:
            setColors({
                primaryDark: '#2d3250',
                primaryLight: '#f9b17a',
                secondaryDark: '#424769',
                secondaryLight: '#676f9d',
                borderDark: '#1b2140',
                borderLight: '#2d3250',
                textDark: '#333333',
                textLight: '#ffffff',
            });
            break;
    }
}

interface ColorPalette {
    primaryDark: string;
    primaryLight: string;
    secondaryDark: string;
    secondaryLight: string;
    borderDark: string;
    borderLight: string;
    textDark: string;
    textLight: string;
}

function setColors(ColorPalette: ColorPalette) {
    document.body.style.setProperty('--color-primary-dark', ColorPalette.primaryDark);
    document.body.style.setProperty('--color-primary-light', ColorPalette.primaryLight);
    document.body.style.setProperty('--color-secondary-dark', ColorPalette.secondaryDark);
    document.body.style.setProperty('--color-secondary-light', ColorPalette.secondaryLight);
    document.body.style.setProperty('--color-border-dark', ColorPalette.borderDark);
    document.body.style.setProperty('--color-border-light', ColorPalette.borderLight);
    document.body.style.setProperty('--color-text-dark', ColorPalette.textDark);
    document.body.style.setProperty('--color-text', ColorPalette.textLight);
}