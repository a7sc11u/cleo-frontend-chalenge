import { styled } from "../stitches";

/**
 * Heading text component
 */
export const Heading = styled("span", {
  fontFamily: "$sans",
  lineHeight: 1.21,
  fontWeight: "$700",
  variants: {
    size: {
      $1: {
        fontSize: "$9",
        lineHeight: "$1",
      },
      $2: {
        fontSize: "$7",
        lineHeight: "$2",
      },
      $3: {
        fontSize: "$6",
        lineHeight: "$3",
      },
    },
    weight: {
      $400: {
        fontWeight: "$400",
      },
      $500: {
        fontWeight: "$500",
      },
      $700: {
        fontWeight: "$700",
      },
    },
  },
});

/**
 * Text component
 */
export const Text = styled("span", {
  fontFamily: "$sans",
  fontSize: "$4",
  variants: {
    size: {
      $1: {
        fontSize: "$5",
        lineHeight: "$3",
      },
      $2: {
        fontSize: "$4",
        lineHeight: "$3",
      },
      $3: {
        fontSize: "$3",
        lineHeight: "$3",
      },
    },
    weight: {
      $400: {
        fontWeight: "$400",
      },
      $500: {
        fontWeight: "$500",
      },
      $700: {
        fontWeight: "$700",
      },
    },
  },
});
