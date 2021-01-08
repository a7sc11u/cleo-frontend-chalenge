import { styled } from "../stitches";

/**
 * exports `Stack` layout primitive, a basic flex box
 * implementation, that applies equal spacing between
 * it's childen.
 */
export const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "$full",
  variants: {
    direction: {
      $row: {
        flexDirection: "row",
      },
      $rowrev: {
        flexDirection: "row-reverse",
      },
      $col: {
        flexDirection: "column",
      },
    },
    justify: {
      $start: {
        justifyContent: "flex-start",
      },
      $center: {
        justifyContent: "center",
      },
      $between: {
        justifyContent: "space-between",
      },
      $end: {
        justifyContent: "flex-end",
      },
    },
    align: {
      $start: {
        alignItems: "flex-start",
      },
      $center: {
        alignItems: "center",
      },
      $between: {
        alignItems: "space-between",
      },
      $end: {
        alignItems: "flex-end",
      },
    },
    gap: {
      $px: {
        gap: "$px",
      },
      $0: {
        gap: "$0",
      },
      $semi: {
        gap: "$semi",
      },
      $1: {
        gap: "$1",
      },
      $2: {
        gap: "$2",
      },
      $3: {
        gap: "$3",
      },
      $4: {
        gap: "$4",
      },
      $5: {
        gap: "$5",
      },
      $6: {
        gap: "$6",
      },
      $8: {
        gap: "$8",
      },
      $10: {
        gap: "$10",
      },
      $16: {
        gap: "$16",
      },
      $18: {
        gap: "$18",
      },
    },
  },
});
