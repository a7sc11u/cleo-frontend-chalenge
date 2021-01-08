import React from "react";

import { Stack } from "../ui/stack";
import { StyledHeader } from "../ui/layout";
import { Heading } from "../ui/text";
import { Box } from "../ui/box";

import cleo from "../assets/cleo_coin.jpg";

export const AppHeader = () => {
  return (
    <StyledHeader>
      <Stack direction="$row" gap="$4">
        <Box css={{ maxWidth: "$8" }}>
          <img src={cleo} alt="" />
        </Box>
        <Heading as="h1" size="$2" css={{ color: "$mono300" }}>
          Bills Y'all
        </Heading>
      </Stack>
    </StyledHeader>
  );
};
