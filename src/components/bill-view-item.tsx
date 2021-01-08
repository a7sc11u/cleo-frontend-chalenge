import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { motion } from "framer-motion";

import { IBill } from "../store/types";

import { getRef } from "../utils/get-ref";

import { Accordion } from "./accordion";
import { Stack } from "../ui/stack";
import { BillListItem } from "../ui/bills";
import { Heading, Text } from "../ui/text";
import { Box } from "../ui/box";
import { TextButton, ToggleButton } from "../ui/interactive";
import { Loader } from "./loader";
import { Clipped } from "../ui/clipped";

interface IBillViewOwnProps extends IBill {
  onActionClick: (id: string) => void;
}

export const BillViewItem = (props: IBillViewOwnProps) => {
  const transactionsRef = useRef<HTMLUListElement>(null);

  const [showTransactions, setShowTransactions] = useState(false);

  const toggleTransactions = useCallback(() => {
    setShowTransactions(!showTransactions);
  }, [showTransactions, setShowTransactions]);

  useEffect(() => {
    if (showTransactions) {
      const transactions = getRef(transactionsRef);
      transactions.focus();
    }
  }, [showTransactions, transactionsRef]);

  const handleActionClick = useCallback(() => {
    props.onActionClick(props.id);
  }, [props]);

  const actionLabel = useMemo(() => {
    return props.isBill ? "Remove bill" : "Add as bill";
  }, [props.isBill]);

  return (
    <BillListItem id={`bill-${props.id}`}>
      <Stack gap="$1">
        <Heading size="$2" as="h3">
          {props.name}
        </Heading>
        <Box
          css={{
            textAlign: "center",
            position: "absolute",
            right: "$4",
            top: "$4",
          }}
        >
          <TextButton
            onClick={handleActionClick}
            className="bill-action-button"
          >
            {actionLabel}
          </TextButton>
          {props.working ? (
            <Box css={{}} aria-live="polite">
              <Clipped>Working</Clipped>
              <Loader aria-hidden={true} />
            </Box>
          ) : null}
        </Box>
        {props.transactions ? (
          <Box>
            <Stack gap="$0" align="$start">
              <ToggleButton
                onClick={toggleTransactions}
                aria-pressed={showTransactions}
                aria-controls={`${props.id}-transactions`}
                aria-expanded={showTransactions}
              >
                {`${props.transactions.length} Transactions`}
                <Clipped>{`Click to ${
                  showTransactions ? "close" : "expand"
                }`}</Clipped>
              </ToggleButton>
              <Accordion visible={showTransactions}>
                <Box>
                  <Box css={{ padding: "$4 $1" }}>
                    <Stack
                      as="ul"
                      gap="$2"
                      ref={transactionsRef}
                      id={`${props.id}-transactions`}
                      role="region"
                      tabIndex={-1}
                      aria-label={`${props.name} Transactions`}
                    >
                      {props.transactions.map((t) => (
                        <motion.li
                          key={t.id}
                          variants={{
                            open: {
                              opacity: 1,
                            },
                            collapsed: {
                              opacity: 0,
                              transition: {
                                delay: 0,
                              },
                            },
                          }}
                        >
                          <Stack
                            as="p"
                            gap="$4"
                            direction="$row"
                            align="$center"
                          >
                            <Text size="$1" weight="$500">
                              ${t.amount}
                            </Text>
                            <Text size="$3">{t.date}</Text>
                          </Stack>
                        </motion.li>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Accordion>
            </Stack>
          </Box>
        ) : null}
      </Stack>
    </BillListItem>
  );
};
