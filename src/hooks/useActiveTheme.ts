import { useMemo } from 'react';
import { PaletteMode } from '@mui/material';
import { Theme, createTheme } from '@mui/material/styles';

import { createPaletteMode } from '../theme';
import { useAppSelector } from '../app/hooks';

/**
 * Active Theme Hook
 * @returns Theme
 */
export const useActiveTheme = (): Theme => {
  const mode: boolean = useAppSelector(
      (state) => state.theme.darkMode
  );
  return useThemeMode(mode ? 'dark' : 'light');
};

/**
 * MUI Theme Mode Hook
 * @param mode PaletteMode
 * @returns Theme
 */
export const useThemeMode = (mode: PaletteMode): Theme => {
  return useMemo(
    () => createTheme(createPaletteMode(mode)),
    [mode]
  );
};