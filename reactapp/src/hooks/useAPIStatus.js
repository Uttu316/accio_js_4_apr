import { useCallback, useState } from "react";

export const useAPIStatus = () => {
  const [status, setStatus] = useState("loading");

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
