import { styled } from "../stitches";

export const StyledHeader = styled("header", {
  width: "$full",
  background: "$mono900",
  margin: "0 auto",
  padding: "$6 $5",
  flex: 0,
});

export const StyledMain = styled("main", {
  flex: 1,
  paddingTop: "$8",
  paddingBottom: "$10",
});

export const StyledContainer = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
  width: "$full",
  paddingLeft: "$3",
  paddingRight: "$5",
  md: {
    paddingLeft: "$8",
    paddingRight: "$8",
  },
  lg: {
    paddingLeft: "$16",
    paddingRight: "$16",
  },
  xl: {
    paddingLeft: "$0",
    paddingRight: "$0",
    maxWidth: "$container",
  },
});
