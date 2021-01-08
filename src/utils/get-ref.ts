import { MutableRefObject, RefObject } from "react";

/** -------------------------------------------------------------------
 * Tab
 *
 * A utility function for getting the type-asserted value of a ref in React.
 *
 * by: https://gist.github.com/steveruizok/f6d2815e8a757a4238220caa116c561e
 * ------------------------------------------------------------------- */

function assert<T>(value: T | null | undefined): asserts value is T {
  if (value === null || typeof value === "undefined") {
    throw new Error("Ref assertion failed.");
  }
}

export function getRef<T>(ref: MutableRefObject<T> | RefObject<T>): T {
  assert(ref.current);
  return ref.current;
}
