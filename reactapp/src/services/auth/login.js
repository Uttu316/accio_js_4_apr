import { api } from "..";

export const login = async (data) => {
  const res = await api({
    endpoint: "/users/login",
    method: "POST",
    body: data,
  });

  if (res && res.data && res.data.accessToken) {
    const { accessToken } = res.data;

    localStorage.setItem("token", accessToken);
    return true;
  }
  return false;
};
