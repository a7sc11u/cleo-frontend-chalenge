import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TRootState } from "../store/types";
import { getBills, getTransactions, patchBill } from "../modules/bills";

import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Loader } from "../components/loader";
import { BillViewList } from "../components/bill-view-list";

type TBillContainerOwnProps = {
  areBills: boolean;
};

export const BillsContainer: React.FC<TBillContainerOwnProps> = (
  props: TBillContainerOwnProps
) => {
  const dispatch = useDispatch();

  const selector = useMemo(
    () => (props.areBills ? getBills : getTransactions),
    [props.areBills]
  );

  const bills = useSelector((state: TRootState) => selector(state));

  const handleActionClick = useCallback(
    (id) => {
      dispatch(patchBill({ billId: id, isBill: !props.areBills }));
    },
    [dispatch, props.areBills]
  );

  if (bills.status === "fetching") {
    return (
      <Box
        css={{
          position: "absolute",
          left: "50%",
          marginTop: "$8",
          transform: "translateX(-50%)",
        }}
      >
        <Loader />
      </Box>
    );
  }

  if (bills.status === "error") {
    return <Text size="$1">try again</Text>;
  }

  return (
    <BillViewList bills={bills.results} onActionClick={handleActionClick} />
  );
};
