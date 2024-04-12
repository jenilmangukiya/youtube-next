import { button } from "./button";
import { textfield } from "./textfield";
import { typography } from "./typography";

export const componentOverride = {
  ...button,
  ...typography,
  ...textfield
};
