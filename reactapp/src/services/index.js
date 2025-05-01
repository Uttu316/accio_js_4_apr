export const api = async (config) => {
  const { method = "GET", endpoint } = config;

  const BASE_URL = "https://api.freeapi.app/api/v1";

  try {
    const URL = BASE_URL + endpoint;
    const res = await fetch(URL);
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    } else {
      // const e = new Error();
      // e.message = res.statusText;
      // e.status = res.status;
      throw res;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
