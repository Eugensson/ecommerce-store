import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const queryString = qs.stringify({
    categoryId: query.categoryId,
    colorId: query.colorId,
    sizeId: query.sizeId,
    isFeatured: query.isFeatured,
  });

  const res = await fetch(`${URL}?${queryString}`);

  return res.json();
};

export default getProducts;
