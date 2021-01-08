import produce from "immer";

import type { Action } from "redux";
import type { ThunkAction } from "redux-thunk";
import { createSelector } from "reselect";

import type { TBillsState, IBill, TRootState } from "../store/types";

/** -------------------------------------------------------------------
 * Action Types
 *
 * ------------------------------------------------------------------- */

const BILLS_FETCH_START = "BILLS_FETCH_START";
const BILLS_FETCH_SUCCESS = "BILLS_FETCH_SUCCESS";
const BILLS_FETCH_FAIL = "BILLS_FETCH_FAIL";

const BILLS_PATCH_BILL_START = "BILLS_PATCH_BILL_START";
const BILLS_PATCH_BILL_SUCCESS = "BILLS_PATCH_BILL_SUCCESS";
const BILLS_PATCH_BILL_ERROR = "BILLS_PATCH_BILL_ERROR";

type TFetchBillsStartAction = {
  type: typeof BILLS_FETCH_START;
};

type TFetchBillsSuccessAction = {
  type: typeof BILLS_FETCH_SUCCESS;
  payload: IBill[];
};

type TFetchBillsErrorAction = {
  type: typeof BILLS_FETCH_FAIL;
};

type TPatchBillStartAction = {
  type: typeof BILLS_PATCH_BILL_START;
  payload: string;
};

type TPatchBillSuccessAction = {
  type: typeof BILLS_PATCH_BILL_SUCCESS;
  payload: IBill;
};

type TPatchBillSuccessError = {
  type: typeof BILLS_PATCH_BILL_ERROR;
  payload: string;
};

type TFetchActions =
  | TFetchBillsStartAction
  | TFetchBillsSuccessAction
  | TFetchBillsErrorAction
  | TPatchBillStartAction
  | TPatchBillSuccessAction
  | TPatchBillSuccessError;

/** -------------------------------------------------------------------
 * Fetch Bills Actions
 *
 * ------------------------------------------------------------------- */
export const fetchBills = (): ThunkAction<
  void,
  TRootState,
  any,
  Action<string>
> => async (dispatch, _, { api }) => {
  // set status to fetching
  dispatch(fetchBillsStart());

  try {
    const response = await api.fetchBills();
    // save results to store
    setTimeout(() => {
      dispatch(fetchBillsSuccess(response));
    }, 1000);
  } catch (error) {
    // catch errors and set state
    dispatch(fetchBillsError());
  }
};

function fetchBillsStart(): TFetchBillsStartAction {
  return {
    type: BILLS_FETCH_START,
  };
}

function fetchBillsSuccess(results): TFetchBillsSuccessAction {
  return {
    type: BILLS_FETCH_SUCCESS,
    payload: results,
  };
}

function fetchBillsError(): TFetchBillsErrorAction {
  return {
    type: BILLS_FETCH_FAIL,
  };
}

/** -------------------------------------------------------------------
 * Patch Bill Actions
 *
 * ------------------------------------------------------------------- */
export const patchBill = (body: {
  billId: string;
  isBill: boolean;
}): ThunkAction<void, TRootState, any, Action<string>> => async (
  dispatch,
  _,
  { api }
) => {
  // set status to fetching
  dispatch(patchBillStart(body.billId));

  try {
    const response = await api.patchBill(body);
    // save results to store
    setTimeout(() => {
      dispatch(patchBillSuccess(response));
    }, 1000);
  } catch (error) {
    // catch errors and set state
    dispatch(patchBillError(body.billId));
  }
};

function patchBillStart(billId: string): TPatchBillStartAction {
  return {
    type: BILLS_PATCH_BILL_START,
    payload: billId,
  };
}

function patchBillSuccess(bill): TPatchBillSuccessAction {
  return {
    type: BILLS_PATCH_BILL_SUCCESS,
    payload: bill,
  };
}

function patchBillError(billId: string): TPatchBillSuccessError {
  return {
    type: BILLS_PATCH_BILL_ERROR,
    payload: billId,
  };
}

/** -------------------------------------------------------------------
 * Initial State
 *
 * ------------------------------------------------------------------- */
const initialState: TBillsState = {
  results: [],
  status: "default",
};

/** -------------------------------------------------------------------
 * Bills Reducer
 *
 * ------------------------------------------------------------------- */
export const billsReducer = (
  state: TBillsState = initialState,
  action: TFetchActions
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case BILLS_FETCH_START:
        draft.status = "fetching";
        break;

      case BILLS_FETCH_SUCCESS:
        draft.status = "ready";
        draft.results = action.payload;
        break;

      case BILLS_FETCH_FAIL:
        draft.status = "error";
        break;

      case BILLS_PATCH_BILL_START:
        const billPatching = draft.results.find((b) => b.id === action.payload);
        if (billPatching) billPatching.working = true;
        break;
      case BILLS_PATCH_BILL_SUCCESS:
        const billIndex = draft.results.findIndex(
          (b) => b.id === action.payload.id
        );
        draft.results[billIndex] = action.payload;
        break;
      case BILLS_PATCH_BILL_ERROR:
        const billErrored = draft.results.find((b) => b.id === action.payload);
        if (billErrored) billErrored.working = false;
        break;

      default:
        break;
    }
  });
};

/** -------------------------------------------------------------------
 * Bills Selectors
 *
 * ------------------------------------------------------------------- */

const billsState = (state) => state.bills;

export const getBills = createSelector(
  [billsState],
  (bills: TBillsState): TBillsState => {
    return {
      status: bills.status,
      results: bills.results.filter((result) => result.isBill === true),
    };
  }
);

export const getTransactions = createSelector(
  [billsState],
  (bills: TBillsState): TBillsState => {
    return {
      status: bills.status,
      results: bills.results.filter((result) => result.isBill === false),
    };
  }
);
