import { useTheme, useMediaQuery, Breakpoint } from "@mui/material";

/**
 * Screen Size Breakpoints
 * @param key A breakpoint key (xs, sm, etc.) or a screen width number in px
 * @param on CSS media query based on the screen width
 * @returns CSS Media query screen size match
 */
export const useBreakpoint = (
    key: Breakpoint = 'sm',
    on: string = 'up',
): boolean => {
    const theme = useTheme();
    const matches = useMediaQuery(
        on === 'down'
            ? theme.breakpoints.down(key)
            : theme.breakpoints.up(key), {
        noSsr: true
    });
    return matches;
};