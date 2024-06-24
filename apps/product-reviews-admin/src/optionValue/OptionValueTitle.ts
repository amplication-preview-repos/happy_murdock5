import { OptionValue as TOptionValue } from "../api/optionValue/OptionValue";

export const OPTIONVALUE_TITLE_FIELD = "id";

export const OptionValueTitle = (record: TOptionValue): string => {
  return record.id?.toString() || String(record.id);
};
