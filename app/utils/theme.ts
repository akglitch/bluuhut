"use client";
import { useTheme } from "next-themes";

/**
 * Lightweight wrapper around next-themes. The site ships a single,
 * carefully tuned editorial light theme; the toggle is retained for
 * completeness but light is the canonical experience.
 */
export const useColorMode = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = theme === "system" ? resolvedTheme : theme;

  const colorMode = {
    toggleColorMode: () => setTheme(current === "dark" ? "light" : "dark"),
  };

  return { colorMode, getMode: () => current ?? "light", isDark: current === "dark" };
};

/* ------------------------------------------------------------------ */
/*  NextUI theme tokens — aligned to the editorial light palette       */
/*  Cobalt accent, ink text, paper surfaces. One restrained accent.    */
/* ------------------------------------------------------------------ */

const accentScale = {
  50: "#ecfdf5",
  100: "#d1fae5",
  200: "#a7f3d0",
  300: "#6ee7b7",
  400: "#34d399",
  500: "#10b981",
  600: "#059669",
  700: "#047857",
  800: "#065f46",
  900: "#064e3b",
  DEFAULT: "#10B981",
  foreground: "#04231a",
};

export const nextTheme = {
  light: {
    colors: {
      background: "#F4F6F8",
      foreground: "#0B1620",
      content1: "#FFFFFF",
      content2: "#ECEFF3",
      divider: "rgba(11,22,32,0.12)",
      focus: "#059669",
      default: {
        100: "#ECEFF3",
        200: "#dfe4ea",
        foreground: "#0B1620",
        DEFAULT: "#ECEFF3",
      },
      primary: { ...accentScale, DEFAULT: "#059669", foreground: "#ffffff" },
      secondary: {
        DEFAULT: "#0B1620",
        foreground: "#F4F6F8",
      },
      warning: "#B45309",
      danger: "#B91C1C",
      success: "#15803D",
    },
    layout: {
      disabledOpacity: "0.4",
      radius: { small: "2px", medium: "3px", large: "4px" },
      borderWidth: { small: "1px", medium: "1px", large: "2px" },
    },
  },
  dark: {
    colors: {
      background: "#0E1C24",
      foreground: "#F6F4EF",
      content1: "#15262F",
      content2: "#1B2F39",
      divider: "rgba(255,255,255,0.12)",
      focus: "#467ade",
      primary: { ...accentScale, DEFAULT: "#467ade", foreground: "#0E1C24" },
      secondary: {
        DEFAULT: "#F6F4EF",
        foreground: "#0E1C24",
      },
      warning: "#f59e0b",
      danger: "#ef4444",
    },
    layout: {
      radius: { small: "2px", medium: "3px", large: "4px" },
      borderWidth: { small: "1px", medium: "1px", large: "2px" },
    },
  },
};
