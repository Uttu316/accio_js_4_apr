import { useState } from "react";

export const useAPIStatus = (intialValue) => {
  let value = intialValue !== undefined ? intialValue : "loading";
  const [status, setStatus] = useState(value);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  return {
    status,
    setStatus,
    isLoading,
    isError,
    isDone,
  };
};
