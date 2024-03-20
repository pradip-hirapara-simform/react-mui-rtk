import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SelectBox = styled(Select)(({ theme }) => ({
  borderRadius: "6px",
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  border: "0px",
  "&:before, &:after": {
    display: "none",
  },
  "&:hover": {
    background: theme.palette.common.white,
  },
  "&.Mui-focused": {
    background: theme.palette.common.white,
  },
  "& .MuiSelect-select": {
    padding: "10px",
  },
  "& .MuiSvgIcon-root": {
    color: "currentColor",
  },
}));
