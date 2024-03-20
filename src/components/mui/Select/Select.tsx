import { SelectProps } from "@mui/material";
import { SelectBox } from "./Select.styles";

const Select = ({ children, ...props }: SelectProps) => {
  return <SelectBox {...props}>{children}</SelectBox>;
};

export default Select;
