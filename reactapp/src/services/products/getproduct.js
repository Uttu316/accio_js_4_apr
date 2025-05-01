import { api } from "..";

export const getProduct = async (productId) => {
  const res = await api({
    endpoint: `/public/randomproducts/${productId}`,
  });
  if (res && res.data) {
    return {
      id: res.data.id,
      title: res.data.title,
      price: res.data.price,
      desc: res.data.description,
      brand: res.data.brand,
      img: res.data.thumbnail,
    };
  }
  return null;
};
