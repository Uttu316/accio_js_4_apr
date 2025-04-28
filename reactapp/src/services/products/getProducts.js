import { api } from "..";

export const getProducts = async () => {
  const res = await api({
    endpoint: "/public/randomproducts",
  });
  if (res && res.data) {
    const data = res.data.data;
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      desc: item.description,
      brand: item.brand,
      img: item.thumbnail,
    }));
  }
  return [];
};
