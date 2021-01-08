import { createStyled } from "@stitches/react";
import { tokens } from "./tokens";

/**
 * Exports methods used to create styled components throughout the application
 * - styled: a function to create React components with styles.
 * - css: a function to create themes and SSR styles.
 */
export const { styled, css } = createStyled({
  tokens,
  breakpoints: {
    md: (rule) => `@media (min-width: 40rem) { ${rule} }`,
    lg: (rule) => `@media (min-width: 60rem) { ${rule} }`,
    xl: (rule) => `@media (min-width: 80rem) { ${rule} }`,
  },
});
