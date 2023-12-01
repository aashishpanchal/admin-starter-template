import { userApi } from "@http/apis";
import { useAppDispatch } from "@app/hooks";
import { useState, useEffect } from "react";
import { setAuth } from "@app/features/auth.slice";

export function useRefresh() {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await userApi.me();
        dispatch(setAuth(data));
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);

  return loading;
}
