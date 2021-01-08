import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBills } from "../modules/bills";

import {
  StyledTabRoot,
  StyledTabList,
  StyledTab,
  StyledTabPanel,
} from "../ui/tabs";
import { BillsContainer } from "../containers/bills-container";
import { Stack } from "../ui/stack";
import { Box } from "../ui/box";
import { StyledContainer } from "../ui/layout";

export const BillsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBills());
  }, [dispatch]);

  return (
    <StyledContainer as="section" aria-label="Manage your Bills">
      <StyledTabRoot id="bills-tabs" value="bills">
        <Box css={{ marginLeft: "$5" }}>
          <StyledTabList
            as={Stack}
            direction="$row"
            gap="$4"
            title="Bills and Transactions tabs"
          >
            <StyledTab value="bills">Bills</StyledTab>
            <StyledTab value="transactions">Transactions</StyledTab>
            <StyledTab value="subscriptions" disabled>
              Subscriptions
            </StyledTab>
          </StyledTabList>
        </Box>
        <StyledTabPanel value="bills">
          <BillsContainer areBills={true} />
        </StyledTabPanel>
        <StyledTabPanel value="transactions">
          <BillsContainer areBills={false} />
        </StyledTabPanel>
      </StyledTabRoot>
    </StyledContainer>
  );
};
