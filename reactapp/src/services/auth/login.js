import { api } from "..";

export const login = async (data) => {
  const res = await api({
    endpoint: "/users/login",
    method: "POST",
    body: data,
  });

  if (res && res.data && res.data.accesToken) {
    const { accesToken } = res.data;

    localStorage.setItem("token", accesToken);
    return true;
  }
  return false;
};
