import { OptionValueWhereInput } from "./OptionValueWhereInput";
import { OptionValueOrderByInput } from "./OptionValueOrderByInput";

export type OptionValueFindManyArgs = {
  where?: OptionValueWhereInput;
  orderBy?: Array<OptionValueOrderByInput>;
  skip?: number;
  take?: number;
};
