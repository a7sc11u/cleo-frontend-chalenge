import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type TAccordionOwnProps = {
  visible: boolean;
  children: React.ReactNode;
};

export const Accordion: React.FC<TAccordionOwnProps> = (
  props: TAccordionOwnProps
) => {
  const { visible, ...rest } = props;

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          {...rest}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: {
              height: "auto",
              transition: {
                duration: 0.7,
                type: "tween",
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.03,
              },
            },
            collapsed: {
              height: 0,
            },
          }}
          transition={{ duration: 0.7, type: "tween", ease: [0.16, 1, 0.3, 1] }}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
