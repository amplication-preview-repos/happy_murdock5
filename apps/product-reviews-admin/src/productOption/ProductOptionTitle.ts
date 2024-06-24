import { ProductOption as TProductOption } from "../api/productOption/ProductOption";

export const PRODUCTOPTION_TITLE_FIELD = "id";

export const ProductOptionTitle = (record: TProductOption): string => {
  return record.id?.toString() || String(record.id);
};
