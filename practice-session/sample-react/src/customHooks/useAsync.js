import { useCallback, useEffect, useState } from "react";

export function useAsync(asyncFun) {
  const [state, setState] = useState({
    status: "idle",
    value: "null",
    error: "null"
  })

  const refetch = useCallback(() => {
    setState({ status: 'pending', value: "null", error: "null" })
    asyncFun()
      .then((val) => {
        setState({ status: 'success', value: val, error: "null" })
      })
      .catch((err) => {
        setState({ status: 'error', value: "null", error: err })
      })
  }, [asyncFun])

  useEffect(() => {
    refetch();
  }, [refetch]);

  return state;
}