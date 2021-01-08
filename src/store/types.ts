import type { rootReducer } from "./configure-store";

export type TRootState = ReturnType<typeof rootReducer>;

export type ITransaction = {
  amount: number;
  date: Date;
  id: number;
};

export type IBill = {
  categoryId: string;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: ITransaction[];
  working?: boolean;
};

export type TBillsState = {
  results: IBill[];
  status: "default" | "fetching" | "error" | "ready";
};

export type TAppState = {
  bills: TBillsState;
};
