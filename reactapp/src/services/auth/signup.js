import { api } from "..";

export const signup = async (data) => {
  const res = await api({
    endpoint: "/users/register",
    method: "POST",
    body: data,
  });

  if (res && res.data) {
    return true;
  }
  return false;
};
