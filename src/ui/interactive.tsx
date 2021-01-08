import { styled } from "../stitches";

export const TextButton = styled("button", {
  flexShrink: 0,
  padding: "0",
  fontSize: "$3",
  fontWeight: "$500",
  userSelect: "none",
  position: "relative",
  "&:before": {
    content: '""',
    backgroundColor: "transparent",
    position: "absolute",
    top: "-$1",
    right: "-$1",
    bottom: "-$1",
    left: "-$1",
  },
  "&:hover:not([disabled])": {
    color: "$blue",
  },
});

export const ToggleButton = styled(TextButton, {
  '&:hover:not([disabled]):not([aria-expanded="true"])': {
    color: "$blue",
  },
  '&[aria-expanded="true"]:not([disabled])': {
    color: "$blue",
    "&:hover": {
      color: "$mono0",
    },
  },
});
