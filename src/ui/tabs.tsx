import { TabRoot, TabList, Tab, TabPanel } from "../components/tabs";

import { styled } from "../stitches";

export const StyledTabRoot = styled(TabRoot, {
  display: "flex",
  flexDirection: "column",
});

export const StyledTabList = styled(TabList, {
  marginBottom: "$5",
});

export const StyledTab = styled(Tab, {
  flexShrink: 0,
  padding: "$3 $4",
  fontSize: "$3",
  fontWeight: "$500",
  userSelect: "none",
  position: "relative",
  borderRadius: "$button",
  '&:hover:not([disabled]):not([aria-selected="true"])': {
    color: "$blue",
    backgroundColor: "$mono700",
  },

  '&[aria-selected="true"]:not([disabled])': {
    color: "$mono900",
    backgroundColor: "$blue",
    "&:hover": {
      color: "$mono900",
    },
  },
});

export const StyledTabPanel = styled(TabPanel, {
  flexGrow: 1,
  padding: "$1 $2",
  position: "relative",
});
