import { APIConstants } from "../shared/constants";
/**
 * Api Service
 */
export class Api {
  fetchBills = () => {
    const fetchUrl = `${APIConstants.base}bills`;

    return new Promise((resolve, reject) => {
      fetch(fetchUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          response.error ? reject(response) : resolve(response);
        });
    });
  };

  patchBill = ({ billId, isBill }) => {
    const fetchUrl = `${APIConstants.base}bills/${billId}`;

    var requestOptions = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBill: isBill }),
    };

    return new Promise((resolve, reject) => {
      fetch(fetchUrl, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          response.error ? reject(response) : resolve(response);
        });
    });
  };
}
