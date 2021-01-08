import React from "react";

import { IBill } from "../store/types";

import { Box } from "../ui/box";
import { BillViewItem } from "./bill-view-item";
import { motion, AnimatePresence } from "framer-motion";

type TBillContainerOwnProps = {
  bills: IBill[];
  onActionClick: (string) => void;
};

export const BillViewList: React.FC<TBillContainerOwnProps> = ({
  bills,
  onActionClick,
}: TBillContainerOwnProps) => {
  return (
    <motion.ul
      animate="open"
      variants={{
        open: {
          transition: {
            staggerChildren: 1,
          },
        },
      }}
    >
      <AnimatePresence>
        {bills.map((bill) => (
          <motion.li
            className="bills-list-item"
            key={bill.id}
            initial="default"
            animate="open"
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            variants={{
              open: {
                opacity: 1,
              },
              default: {
                opacity: 0,
              },
            }}
          >
            <Box css={{ paddingBottom: "$4" }}>
              <BillViewItem {...bill} onActionClick={onActionClick} />
            </Box>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};
