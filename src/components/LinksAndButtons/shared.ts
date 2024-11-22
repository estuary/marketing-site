import clsx from 'clsx';
import {
    baseButton,
    buttonPrimary,
    buttonPrimaryLight,
    buttonPrimaryDark,
    fullWidthStyle,
    hover,
} from '../styles.module.less';

type Theme = 'light' | 'dark';

export interface CustomProps {
    theme?: Theme;
    fullWidth?: boolean;
}

export const customStyles = (
    theme?: Theme,
    fullWidth?: boolean,
    className?: string
) =>
    clsx(
        baseButton,
        buttonPrimary,
        theme === 'light' ? buttonPrimaryLight : buttonPrimaryDark,
        fullWidth ? fullWidthStyle : null,
        hover,
        className
    );
