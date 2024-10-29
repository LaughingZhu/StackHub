/*
 * @Date: 2024-10-28 11:59:42
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-28 11:59:46
 * @Description:
 */
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
